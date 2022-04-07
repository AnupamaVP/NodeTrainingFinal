import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity("roles")
export class Roles extends AbstractEntity {
    @PrimaryGeneratedColumn("increment")
    public roleId: string;

    @Column({ nullable: false })
    public roleName: string;

}
