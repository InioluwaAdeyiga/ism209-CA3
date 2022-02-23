import { Module } from '@nestjs/common';
import { LinkedidentityService } from './linkedidentity.service';
import { LinkedidentityController } from './linkedidentity.controller';

@Module({
  controllers: [LinkedidentityController],
  providers: [LinkedidentityService]
})
export class LinkedidentityModule {}
