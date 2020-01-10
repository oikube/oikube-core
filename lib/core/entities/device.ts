import { ObjectType, Field } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { User } from "./user";
import { Lazy } from "../helpers";

@Entity()
@ObjectType()
export class Device {
	@PrimaryGeneratedColumn()
	readonly id: number;

	@Field()
	@Column()
	name: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	description?: string;

	@Field(type => User)
	@ManyToOne(type => User, { lazy: true })
	author: Lazy<User>;
}
