import { Module } from '@nestjs/common';
import { BiodataService } from './biodata.service';
import { BiodataController } from './biodata.controller';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Biodatum } from './entities/biodatum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Biodatum])],
  controllers: [BiodataController],
  providers: [BiodataService]
})
export class BiodataModule {}
