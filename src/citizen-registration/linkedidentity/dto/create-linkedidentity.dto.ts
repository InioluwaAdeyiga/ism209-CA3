import { CreateBiodatumDto } from "src/citizen-registration/biodata/dto/create-biodatum.dto";
import { ModeOfEntry } from "../../../citizen-registration/studentRegistration.types";
export class CreateLinkedidentityDto {
    readonly nin: number;
    readonly bvn: number;
    readonly mobilenumber: number;
    readonly user: CreateBiodatumDto;
}
