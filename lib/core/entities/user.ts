import { Field, ID, ObjectType } from "type-graphql";
import {
	PrimaryGeneratedColumn,
	Column,
	Entity,
	OneToMany,
	BaseEntity
} from "typeorm";

import { Device } from "./device";
import { Lazy } from "../helpers";

@ObjectType()
@Entity()
export class User extends BaseEntity {
	@Field(type => ID)
	@PrimaryGeneratedColumn()
	readonly id: number;

	@Field()
	@Column()
	email: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	name?: string;

	@Column()
	password: string;

	@OneToMany(
		type => Device,
		device => device.author,
		{ lazy: true }
	)
	@Field(type => [Device])
	recipes: Lazy<Device[]>;
}
