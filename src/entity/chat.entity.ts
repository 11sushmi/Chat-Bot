import { Entity, PrimaryGeneratedColumn, Column, Generated } from "typeorm";

@Entity({ name: "Chat", schema: "ChatBot" })
export class Chat {

    @Generated("uuid")
    @Column({ name: "chatId", primary: true, nullable: false })
    userId: string;

    @Column({ name: "senderId", primary: false, nullable: true })
    senderId: string;

    @Column({ name: "receiverId", primary: false, nullable: true })
    receiverId: string;

    @Column({ name: "chat", primary: false, nullable: true })
    chat: string;

    @Column("jsonb", { name: "additionalProperties", primary: false, nullable: true })
    additionalProperties: {};

}
