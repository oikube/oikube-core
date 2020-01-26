import { Plugin } from '../entities/plugin';
import { Context } from './types/context';
export declare class PluginResolver {
    plugin(pluginId: number): Promise<Plugin | undefined>;
    plugins(): Promise<Plugin[]>;
    enablePlugin(pluginId: number, { user }: Context): Promise<Plugin>;
}
