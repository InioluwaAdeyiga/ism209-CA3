import { Module } from '@nestjs/common';
import { BiodataModule } from './biodata/biodata.module';

import { LinkedidentityModule } from './linkedidentity/linkedidentity.module';

@Module({
  imports: [BiodataModule, LinkedidentityModule]
})
export class CitizenRegistrationModule {}
