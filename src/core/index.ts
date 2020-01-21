import 'reflect-metadata';
import { Service } from 'typedi';
import { ApolloServer } from 'apollo-server';
import { Container } from 'typedi';
import * as TypeORM from 'typeorm';
import * as TypeGraphQL from 'type-graphql';

import { ThingResolver } from './resolvers/thing-resolver';
import { Thing } from './entities/thing';
import { Widget } from './entities/widget';
import { seedDatabase } from './helpers';
import { Context } from './resolvers/types/context';
import { User } from './entities/user';
import config from '../defs/config';
import { Area } from './entities/area';
import { Action } from './entities/action';
import { Template } from './entities/template';
import { Automation } from './entities/automation';

// register 3rd party IOC container
TypeORM.useContainer(Container);
@Service()
export class OikubeCore {
	async bootstrap() {
		try {
			// create TypeORM connection
			await TypeORM.createConnection({
				type: 'sqlite',
				database: './db.sqlite',
				entities: [Thing, User, Widget, Area, Action, Template, Automation],
				synchronize: true,
				logger: 'advanced-console',
				logging: 'all',
				dropSchema: true,
				cache: true,
			});

			// seed database with some data
			const { defaultUser } = await seedDatabase();

			// build TypeGraphQL executable schema
			const schema = await TypeGraphQL.buildSchema({
				resolvers: [ThingResolver],
				container: Container,
			});

			// create mocked context
			const context: Context = { user: defaultUser };

			// Create GraphQL server
			const server = new ApolloServer({ schema, context });

			// Start the server
			const { url } = await server.listen(config.PORT);
			console.log(`Oikube is running, GraphQL Playground available at ${url}`);
		} catch (err) {
			console.error(err);
		}
	}
}
