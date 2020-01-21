import { getRepository } from 'typeorm';

import { Thing } from './entities/thing';
import { User } from './entities/user';

export async function seedDatabase() {
	const defaultUser = User.create({
		email: 'test@github.com',
		name: '19majkel94',
		password: 's3cr3tp4ssw0rd',
	});
	await User.save(defaultUser);

	return {
		defaultUser,
	};
}

export type Lazy<T extends object> = Promise<T> | T;
