import { InputType, Field } from "type-graphql";

import { Device } from "../../entities/device";

@InputType()
export class DeviceInput implements Partial<Device> {
	@Field()
	name: string;

	@Field({ nullable: true })
	description: string;
}
