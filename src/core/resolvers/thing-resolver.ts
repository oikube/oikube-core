import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';

import { Thing } from '../entities/thing';
import { Context } from './types/context';
import { ThingInput } from './types/thing-input';

@Resolver(Thing)
export class ThingResolver {
	@Query(returns => Thing, { nullable: true })
	thing(@Arg('thingId', type => Int) thingId: number) {
		return Thing.findOne(thingId);
	}

	@Query(returns => [Thing])
	things(): Promise<Thing[]> {
		return Thing.find();
	}

	@Mutation(returns => Thing)
	addThing(@Arg('thing') thingInput: ThingInput, @Ctx() { user }: Context): Promise<Thing> {
		const thing = Thing.create({
			...thingInput,
		});
		return thing.save();
	}
	getThingByAddress(address: string) {
		return Thing.findOne({ address });
	}
}
