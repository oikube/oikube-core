import { ObjectType, Field } from 'type-graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

import { Widget } from './widget';
import { Lazy } from '../helpers';

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
	isGateway: boolean;

	@Field()
	@Column()
	isVirtual: boolean;

	@Field()
	@Column()
	currentValue: string;

	@Field()
	@Column()
	lastUpdated: Date;

	@OneToMany(
		type => Widget,
		widget => widget.thing,
		{ lazy: true },
	)
	@Field(type => [Widget])
	widgets: Lazy<Widget[]>;
}
