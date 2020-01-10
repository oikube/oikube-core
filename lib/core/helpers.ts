import { getRepository } from "typeorm";

import { Device } from "./entities/device";
import { User } from "./entities/user";

export async function seedDatabase() {
	const deviceRepository = getRepository(Device);

	const userRepository = getRepository(User);

	const defaultUser = userRepository.create({
		email: "test@github.com",
		name: "19majkel94",
		password: "s3cr3tp4ssw0rd"
	});
	await userRepository.save(defaultUser);

	const [device1, device2] = deviceRepository.create([
		{
			name: "Recipe 1",
			description: "Desc 1"
		},
		{
			name: "Recipe 2"
		}
	]);
	await deviceRepository.save([device1, device2]);

	return {
		defaultUser
	};
}

export type Lazy<T extends object> = Promise<T> | T;
