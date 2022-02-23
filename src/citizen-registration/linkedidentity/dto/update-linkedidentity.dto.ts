import { PartialType } from '@nestjs/mapped-types';
import { CreateLinkedidentityDto } from './create-linkedidentity.dto';

export class UpdateLinkedidentityDto extends PartialType(CreateLinkedidentityDto) {}
