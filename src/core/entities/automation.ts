import { ObjectType, Field } from "type-graphql";
import {
	Column,
	Entity,
	ManyToMany,
	JoinTable,
	PrimaryGeneratedColumn,
	BaseEntity
} from "typeorm";

import { Action } from "./action";
import { Lazy } from "../helpers";

@Entity()
@ObjectType()
export class Automation extends BaseEntity {
	@PrimaryGeneratedColumn()
	readonly id: number;

	@Field()
	@Column()
	name: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	listenTo: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	trigger: string;

	@ManyToMany(type => Action)
	@JoinTable()
	@Field(type => [Action])
	actions: Lazy<Action>;
}
