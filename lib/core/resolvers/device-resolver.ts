import { Resolver, Query, Arg, Mutation, Ctx, Int } from "type-graphql";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";

import { Device } from "../entities/device";
import { DeviceInput } from "./types/device-input";
import { Context } from "./types/context";

@Resolver(Device)
export class DeviceResolver {
	constructor(
		@InjectRepository(Device)
		private readonly deviceRepository: Repository<Device>
	) {}

	@Query(returns => Device, { nullable: true })
	device(@Arg("deviceId", type => Int) deviceId: number) {
		return this.deviceRepository.findOne(deviceId);
	}

	@Query(returns => [Device])
	devices(): Promise<Device[]> {
		return this.deviceRepository.find();
	}

	@Mutation(returns => Device)
	addDevice(
		@Arg("device") deviceInput: DeviceInput,
		@Ctx() { user }: Context
	): Promise<Device> {
		const device = this.deviceRepository.create({
			...deviceInput,
			author: user
		});
		return this.deviceRepository.save(device);
	}
}
