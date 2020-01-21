import { InputType, Field } from 'type-graphql';

import { Thing } from '../../entities/thing';

@InputType()
export class ThingInput implements Partial<Thing> {
	@Field()
	name: string;

	@Field({ nullable: true })
	description: string;
}
