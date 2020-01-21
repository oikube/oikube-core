import { ObjectType, Field } from 'type-graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Thing } from './thing';
import { Lazy } from '../helpers';

@Entity()
@ObjectType()
export class Widget {
	@PrimaryGeneratedColumn()
	readonly id: number;

	@Field()
	@Column()
	name: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	description?: string;

	@Field()
	type: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	settings: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	position: string;

	@Field(type => Thing)
	@ManyToOne(type => Thing, { lazy: true })
	thing: Lazy<Thing>;
}
