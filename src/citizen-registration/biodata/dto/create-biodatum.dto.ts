export class CreateBiodatumDto {
    readonly firstName: string;
    readonly middleName?: string; 
    readonly lastName: string; 
    readonly dateOfBirth?: Date; 
    readonly countryofbirth?:string
    readonly sateofbirth?:string
    readonly townofbirth?:string
    readonly residenceaddress?:string
    readonly profession?:string
}
