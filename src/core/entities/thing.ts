import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Lazy } from '../helpers';
import { Widget } from './widget';

@Entity()
@ObjectType()
export class Thing extends BaseEntity {
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
	address: string;

	@Field()
	@Column()
	isGateway: boolean = false;

	@Field()
	@Column()
	isVirtual: boolean = false;

	@Field({ nullable: true })
	@Column({ nullable: true })
	currentValue?: string;

	@Field()
	@Column()
	lastUpdated: Date = new Date();

	@OneToMany(
		type => Widget,
		widget => widget.thing,
		{ lazy: true },
	)
	@Field(type => [Widget])
	widgets: Lazy<Widget[]>;
}
