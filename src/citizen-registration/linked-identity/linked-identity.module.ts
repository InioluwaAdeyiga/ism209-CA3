import { Module } from '@nestjs/common';
import { LinkedIdentityService } from './linked-identity.service';
import { LinkedIdentityController } from './linked-identity.controller';

@Module({
  controllers: [LinkedIdentityController],
  providers: [LinkedIdentityService]
})
export class LinkedIdentityModule {}
