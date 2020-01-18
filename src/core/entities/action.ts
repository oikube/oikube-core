import { ObjectType, Field } from "type-graphql";
import {
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	BaseEntity
} from "typeorm";

import { Template } from "./template";
import { Lazy } from "../helpers";

@Entity()
@ObjectType()
export class Action extends BaseEntity {
	@PrimaryGeneratedColumn()
	readonly id: number;

	@Field()
	@Column()
	name: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	description?: string;

	@Field(type => Template)
	@ManyToOne(type => Template, { lazy: true })
	template: Lazy<Template>;

	@Field()
	@Column()
	params: string;
}
