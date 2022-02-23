import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Biodatum } from '../biodata/entities/biodatum.entity';
import { CreateLinkedidentityDto } from './dto/create-linkedidentity.dto';
import { UpdateLinkedidentityDto } from './dto/update-linkedidentity.dto';
import { linkedidentity } from './entities/linkedidentity.entity';

@Injectable()
export class LinkedidentityService {

  constructor(
    @InjectRepository(linkedidentity)
    private linkedidentityRepository: Repository<linkedidentity>,

    @InjectRepository(Biodatum)
    private biodatumRepository: Repository<Biodatum>
  ) { }

  async create(createLinkedidentityDto: CreateLinkedidentityDto) {
    //return 'This action adds a new student';
    const newLinkedidentity = this.linkedidentityRepository.create(createLinkedidentityDto);
    //ideally, below should be wrapped in a transaction so that it can roll back if there is error in any of the stages.
    if (createLinkedidentityDto.user) {
      const newLinkedidentity = this.biodatumRepository.create(createLinkedidentityDto.user);
      const biodata: Biodatum = await this.biodatumRepository.save(newLinkedidentity);
      newLinkedidentity.user = biodata;
    }
    return this.linkedidentityRepository.save(newLinkedidentity)
  }

  async findAll() {
    //return `This action returns all students`;
    return await this.linkedidentityRepository.find({ relations: ['biodatum'] });
  }

  async findOne(id: number) {
    //return `This action returns a #${id} student`;
    return await this.linkedidentityRepository.findOne(id);
  }

  async update(id: number, updatelinkedidentityDto: UpdateLinkedidentityDto) {
    //return `This action updates a #${id} student`;
    return await this.linkedidentityRepository.update(id, updatelinkedidentityDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} student`;
    return await this.linkedidentityRepository.delete(id);
  }

  /* Work on relationships */
  async setUserById(linkedidentityId: number, biodatumId: number) {
    try {
      return await this.linkedidentityRepository.createQueryBuilder()
        .relation(LinkedidentityService, "user")
        .of(linkedidentityId)
        .set(biodatumId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetUserById(linkedidentityId: number) {
    try {
      return await this.linkedidentityRepository.createQueryBuilder()
        .relation(linkedidentity, "user")
        .of(linkedidentity)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}