import { ModeOfEntry } from "../../../citizen-registration/studentRegistration.types";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Biodatum } from "src/citizen-registration/biodata/entities/biodatum.entity";
@Entity()
export class linkedidentity {
    @PrimaryGeneratedColumn() 
    nin: number;
    @Column() 
    bvn: number;
    @Column()
    mobilenumber: number;
    @JoinColumn()
    @OneToOne(type => Biodatum, Biodatum => Biodatum.linkedidentity, {cascade:true}) 
    linkedidentity: linkedidentity;
    Biodatum: any;
}

