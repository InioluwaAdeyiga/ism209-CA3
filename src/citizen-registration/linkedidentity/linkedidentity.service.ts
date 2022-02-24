import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Biodatum } from '../biodata/entities/biodatum.entity';
import { CreateLinkedidentityDto } from './dto/create-linkedidentity.dto';
import { UpdateLinkedidentityDto } from './dto/update-linkedidentity.dto';
import { linkedidentity } from './entities/linkedidentity.entity';
import { LinkedidentityModule } from './linkedidentity.module';

@Injectable()
export class LinkedidentityService {

  constructor(
    @InjectRepository(linkedidentity)
    private LinkedidentityRepository: Repository<linkedidentity>,

    @InjectRepository(Biodatum)
    private biodatumRepository: Repository<Biodatum>
  ) { }

  async create(createLinkedidentityDto: CreateLinkedidentityDto) {
    //return 'This action adds a new student';
    const newlinkedidentity = this.LinkedidentityRepository.create(createLinkedidentityDto);
    //ideally, below should be wrapped in a transaction so that it can roll back if there is error in any of the stages.
    if (createLinkedidentityDto.biodatum) {
      const newBiodatum = this.biodatumRepository.create(createLinkedidentityDto.biodatum);
      const Biodatum: Biodatum = await this.biodatumRepository.save(newBiodatum);
      newlinkedidentity.Biodatum = Biodatum;
    }
    return this.LinkedidentityRepository.save(newlinkedidentity)
  }

  async findAll() {
    //return `This action returns all students`;
    return await this.LinkedidentityRepository.find({ relations: ['Biodatum'] });
  }

  async findOne(id: number) {
    //return `This action returns a #${id} student`;
    return await this.LinkedidentityRepository.findOne(id);
  }

  async update(id: number, updateLinkedidentityDto: UpdateLinkedidentityDto) {
    //return `This action updates a #${id} student`;
    return await this.LinkedidentityRepository.update(id, updateLinkedidentityDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} student`;
    return await this.LinkedidentityRepository.delete(id);
  }

  /* Work on relationships */
  async setUserById(linkedidentityId: number, biodatumId: number) {
    try {
      return await this.LinkedidentityRepository.createQueryBuilder()
        .relation(linkedidentity, "biodatum")
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
      return await this.LinkedidentityRepository.createQueryBuilder()
        .relation(linkedidentity, "biodatum")
        .of(linkedidentityId)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting biodatum for linkedidentity: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}