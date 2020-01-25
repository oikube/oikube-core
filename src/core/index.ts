import { ApolloServer } from 'apollo-server';
import * as TypeGraphQL from 'type-graphql';
import { Container } from 'typedi';
import * as TypeORM from 'typeorm';

import { PluginResolver } from './resolvers/plugin-resolver';
import { ThingResolver } from './resolvers/thing-resolver';

import { Action } from './entities/action';
import { Area } from './entities/area';
import { Automation } from './entities/automation';
import { Plugin } from './entities/plugin';
import { Template } from './entities/template';
import { Thing } from './entities/thing';
import { User } from './entities/user';
import { Widget } from './entities/widget';
import { seedDatabase } from './helpers';

import { Context } from './resolvers/types/context';

import config from '../defs/config';

// register 3rd party IOC container
TypeORM.useContainer(Container);

export async function OikubeCoreService({ createHook }) {
	try {
		// create TypeORM connection
		await TypeORM.createConnection({
			type: 'sqlite',
			database: './db.sqlite',
			entities: [Thing, User, Widget, Area, Action, Template, Automation, Plugin],
			synchronize: true,
			logger: 'advanced-console',
			logging: 'all',
			dropSchema: false,
			cache: true,
		});

		// seed database with some data
		const { defaultUser } = await seedDatabase();

		// build TypeGraphQL executable schema
		const schema = await TypeGraphQL.buildSchema({
			resolvers: [ThingResolver, PluginResolver],
			container: Container,
		});

		// create mocked context
		const context: Context = { user: defaultUser };

		// Create GraphQL server
		const server = new ApolloServer({ schema, context });
		createHook(OikubeCoreService.API_INIT);

		// Start the server
		const { url } = await server.listen(config.PORT);
		console.log(`Oikube is running, GraphQL Playground available at ${url}`);
	} catch (err) {
		console.error(err);
	}
}

OikubeCoreService.API_INIT = `api/init`;
