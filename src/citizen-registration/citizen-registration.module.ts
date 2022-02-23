import { Module } from '@nestjs/common';
import { BiodataModule } from './biodata/biodata.module';
import { LinkedIdentityModule } from './linked-identity/linked-identity.module';

@Module({
  imports: [BiodataModule, LinkedIdentityModule]
})
export class CitizenRegistrationModule {}
