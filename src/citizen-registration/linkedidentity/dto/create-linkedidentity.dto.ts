import { CreateBiodatumDto } from "src/citizen-registration/biodata/dto/create-biodatum.dto";
export class CreateLinkedidentityDto {
    readonly nin: number;
    readonly bvn: number;
    readonly mobilenumber: number;
    readonly biodatum: CreateBiodatumDto;
}
