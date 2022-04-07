import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity("projects")
export class Projects extends AbstractEntity {
    @PrimaryGeneratedColumn("increment")
    public pid: string;

    @Column({ nullable: false })
    public pname: string;

    @Column({ nullable: false })
    public description: string;

    @Column({ nullable: false, default: true })
    public isActive: boolean;

}
