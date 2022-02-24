import { Module } from '@nestjs/common';
import { LinkedidentityService } from './linkedidentity.service';
import { LinkedidentityController } from './linkedidentity.controller';
import { linkedidentity } from './entities/linkedidentity.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biodatum } from '../biodata/entities/biodatum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([linkedidentity, Biodatum])],
  controllers: [LinkedidentityController],
  providers: [LinkedidentityService]
  
})
export class LinkedidentityModule {}
