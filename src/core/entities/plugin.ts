import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Plugin extends BaseEntity {
	@PrimaryGeneratedColumn()
	readonly id: number;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column()
	vendor: string;

	@Field({ nullable: true })
	@Column({ nullable: true })
	description?: string;

	@Field()
	@Column()
	isActive: boolean = false;

	@Field()
	@Column()
	hasFailed: boolean = false;

	@Field()
	@Column()
	config: string = '';
}
