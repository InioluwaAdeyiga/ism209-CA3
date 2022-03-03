import { Biodatum } from "src/citizen-registration/biodata/entities/biodatum.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class linkedidentity {
    @PrimaryGeneratedColumn() 
    Nin: number;
    @Column() 
    Bvn: number;
    @Column()
    mobileNumber: number;
    @JoinColumn()
    @OneToOne(type => Biodatum, biodatum => biodatum.linkedidentity, {cascade:true}) 
    biodatum: Biodatum;
    
}

