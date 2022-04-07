import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { Addresses } from "./Addresses";
import { Department } from "./Department";

@Entity("employee")
export class Employee extends AbstractEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ nullable: false })
    public name: string;

    @Column({ nullable: false, unique: true })
    public username: string;

    @Column({ nullable: true })
    public password: string;

    @Column({ nullable: false })
    public age: number;

    @Column({ nullable: false, default: true })
    public isActive: boolean;

    @ManyToOne((type) => Department, { cascade: true })
    @JoinColumn()
    public department: Department;

    @Column()
    public departmentId: string;

    @OneToOne((type) => Addresses, { cascade: true })
    @JoinColumn()
    public addresses: Addresses;

    @Column({ nullable: true })
    public addressesId: number;
}
