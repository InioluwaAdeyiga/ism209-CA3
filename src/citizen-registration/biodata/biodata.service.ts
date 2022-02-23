import { Injectable } from '@nestjs/common';
import { CreateBiodatumDto } from './dto/create-biodatum.dto';
import { UpdateBiodatumDto } from './dto/update-biodatum.dto';

@Injectable()
export class BiodataService {
  create(createBiodatumDto: CreateBiodatumDto) {
    return 'This action adds a new biodatum';
  }

  findAll() {
    return `This action returns all biodata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biodatum`;
  }

  update(id: number, updateBiodatumDto: UpdateBiodatumDto) {
    return `This action updates a #${id} biodatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} biodatum`;
  }
}
