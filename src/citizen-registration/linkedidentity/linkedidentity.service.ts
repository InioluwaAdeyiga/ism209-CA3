import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Biodatum } from '../biodata/entities/biodatum.entity';
import { CreateLinkedidentityDto } from './dto/create-linkedidentity.dto';
import { UpdateLinkedidentityDto } from './dto/create-linkedidentity.dto';
import { linkedidentity } from './entities/linkedidentity.entity';

@Injectable()
export class LinkedidentityService {

  constructor(
    @InjectRepository(linkedidentity)
    private studentRepository: Repository<linkedidentity>,

    @InjectRepository(Biodatum)
    private userRepository: Repository<Biodatum>
  ) { }

  async create(createStudentDto: CreateLinkedidentityDto) {
    //return 'This action adds a new student';
    const newStudent = this.studentRepository.create(createStudentDto);
    //ideally, below should be wrapped in a transaction so that it can roll back if there is error in any of the stages.
    if (createStudentDto.user) {
      const newUser = this.userRepository.create(createStudentDto.user);
      const user: Biodatum = await this.userRepository.save(newUser);
      newStudent.Biodatum = user;
    }
    return this.studentRepository.save(newStudent)
  }

  async findAll() {
    //return `This action returns all students`;
    return await this.studentRepository.find({ relations: ['user'] });
  }

  async findOne(id: number) {
    //return `This action returns a #${id} student`;
    return await this.studentRepository.findOne(id);
  }

  async update(id: number, updateStudentDto: UpdateLinkedidentityDto) {
    //return `This action updates a #${id} student`;
    return await this.studentRepository.update(id, updateStudentDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} student`;
    return await this.studentRepository.delete(id);
  }

  /* Work on relationships */
  async setUserById(studentId: number, userId: number) {
    try {
      return await this.studentRepository.createQueryBuilder()
        .relation(Student, "user")
        .of(studentId)
        .set(userId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetUserById(studentId: number) {
    try {
      return await this.studentRepository.createQueryBuilder()
        .relation(Student, "user")
        .of(studentId)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}