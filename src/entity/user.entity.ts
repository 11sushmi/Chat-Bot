import { Entity, PrimaryGeneratedColumn, Column, Generated } from "typeorm";

@Entity({ name: "User", schema: "ChatBot" })
export class User {

    @Generated("uuid")
    @Column({ name: "userId", primary: true, nullable: false })
    userId: string;

    @Column({ name: "firstName", primary: false, nullable: true })
    firstName: string;

    @Column({ name: "lastName", primary: false, nullable: true })
    lastName: string;

    @Column({ name: "mobileNumber", primary: false, nullable: true })
    mobileNumber: string;

    @Column({ name: "email", primary: false, nullable: true })
    email: string;

    @Column({ name: "password", primary: false, nullable: true })
    password: string;

    @Column("jsonb", { name: "additionalProperties", primary: false, nullable: true })
    additionalProperties: {};

}
