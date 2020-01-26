import { Thing } from '../entities/thing';
import { Context } from './types/context';
import { ThingInput } from './types/thing-input';
export declare class ThingResolver {
    thing(thingId: number): Promise<Thing | undefined>;
    things(): Promise<Thing[]>;
    addThing(thingInput: ThingInput, { user }: Context): Promise<Thing>;
    getThingByAddress(address: string): Promise<Thing | undefined>;
}
