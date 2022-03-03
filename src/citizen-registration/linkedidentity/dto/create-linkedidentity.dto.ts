import { CreateBiodatumDto } from "src/citizen-registration/biodata/dto/create-biodatum.dto";
export class CreateLinkedidentityDto {
    readonly Nin: number;
    readonly Bvn: number;
    readonly mobileNumber: number;
    readonly biodatum: CreateBiodatumDto;
}
