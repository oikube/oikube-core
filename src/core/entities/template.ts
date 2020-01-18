import { ObjectType, Field } from "type-graphql";
import {
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	BaseEntity
} from "typeorm";

import { User } from "./user";
import { Lazy } from "../helpers";

@Entity()
@ObjectType()
export class Template extends BaseEntity {
	@PrimaryGeneratedColumn()
	readonly id: number;

	@Field()
	@Column()
	name: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	description?: string;

	@Field()
	@Column()
	vendor: string;

	@Field()
	@Column()
	settings: string;
}
