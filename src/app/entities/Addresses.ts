import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { DepartmentDetails } from "./DepartmentDetails";
import { Employee } from "./Employee";

@Entity("addresses")
export class Addresses extends AbstractEntity {
    @PrimaryGeneratedColumn("increment")
    public id: number;

    @Column({ nullable: false })
    public address: string;
}
