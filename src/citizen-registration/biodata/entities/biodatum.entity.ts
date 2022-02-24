import { linkedidentity } from "../../../citizen-registration/linkedidentity/entities/linkedidentity.entity"
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
    export class Biodatum {
        @PrimaryGeneratedColumn() 
        firstName: string;
        @Column({nullable: true}) 
        middleName: string;
        @Column() 
        lastName: string;
        @Column({nullable: true}) 
        dateOfBirth: Date;
        @Column({nullable: true}) 
        nationality: string
        @Column({nullable: true}) 
        countryofbirth: string
        @Column({nullable: true}) 
        stateofbirth: string
        @Column({nullable: true}) 
        townofbirth: string
        @Column({nullable: true}) 
        residenceaddress: string
        @Column({nullable: true}) 
        profession: string
        @OneToOne(type => linkedidentity, linkedidentity => linkedidentity.Biodatum)
        linkedidentity: linkedidentity;
        biodatum: Biodatum;
     }
