import { Arg, Ctx, Int, Mutation, Query, Resolver } from 'type-graphql';

import { Plugin } from '../entities/plugin';
import { Context } from './types/context';

@Resolver(Plugin)
export class PluginResolver {
	@Query(returns => Plugin, { nullable: true })
	plugin(@Arg('pluginId', type => Int) pluginId: number) {
		return Plugin.findOne(pluginId);
	}

	@Query(returns => [Plugin])
	plugins(): Promise<Plugin[]> {
		return Plugin.find();
	}

	@Mutation(returns => Plugin)
	async enablePlugin(@Arg('pluginId') pluginId: number, @Ctx() { user }: Context): Promise<Plugin> {
		const plugin = await Plugin.findOne(pluginId);
		if (plugin) {
			plugin.isActive = true;
			return plugin.save();
		} else {
			return Promise.reject();
		}
	}
}
