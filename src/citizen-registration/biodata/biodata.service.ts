import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';
import { Biodatum } from './entities/biodatum.entity';

@Injectable()
export class BiodataService {
  constructor(
   //inject user repository for use here in UsersService as if it is part of the class 
    @InjectRepository(Biodatum)
    private biodataRepository: Repository<Biodatum>
  ){}
    async create(createBiodataDto: CreateBiodatumDto) {
    const newBiodatum: Biodatum = this.biodataRepository.create(createBiodataDto) 
    return this.biodataRepository.save(newBiodatum);
//return 'This action adds a new user';
  }
    async findAll() {
//return `This action returns all users`; 
    return await this.biodataRepository.find();
  }
    async findOne(id: number) {
  //return `This action returns a #${id} user`; 
    return await this.biodataRepository.findOne(id);
  }
    async update(id: number, updateBiodatumDto: UpdateBiodatumDto) {
  //return `This action updates a #${id} user`;
    return await this.biodataRepository.update(id, updateBiodatumDto);
  }
  async remove(id: number) {
  //return `This action removes a #${id} user`; return await this.usersRepository.delete(id);
  } }