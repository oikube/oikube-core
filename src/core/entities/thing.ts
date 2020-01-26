import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Index } from 'typeorm';

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
	@Index()
	vendor: string;

	@Field()
	@Column()
	@Index({ unique: true })
	address: string;

	@Field()
	@Column()
	isGateway: boolean = false;

	@Field()
	@Column()
	parent: number = 0;

	@Field()
	@Column()
	isVirtual: boolean = false;

	@Field({ nullable: true })
	@Column({ nullable: true })
	currentValue?: string;

	@Field()
	@Column()
	@Index()
	lastUpdated: Date = new Date();

	@OneToMany(
		type => Widget,
		widget => widget.thing,
		{ lazy: true },
	)
	@Field(type => [Widget])
	widgets: Lazy<Widget[]>;

	static upsert(data: any): Promise<Thing> {
		return Thing.findOne({ address: data.address }).then(found => {
			if (found) {
				found.lastUpdated = new Date();
				if (data.currentValue && data.currentValue != found.currentValue) {
					found.currentValue = data.currentValue;
				}
				return found.save();
			} else {
				return Thing.create(data).save();
			}
		});
	}
}
