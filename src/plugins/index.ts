import { OikubePlugin } from './plugin';
import { watch } from 'chokidar';

export function OikubePluginService({ createHook }) {
	let plugins: OikubePlugin[] = [];

	console.log('CWD', process.cwd());
	function loadPlugin(path: string) {
		let plugClass = require(path);
		if (plugClass.default.prototype instanceof OikubePlugin) {
			createHook(OikubePluginService.PLUGIN_PREPARE, { pluginClass: plugClass.default });
			let item = new plugClass.default();
			plugins.push(item);
			item._start();
			createHook(OikubePluginService.PLUGIN_START, { plugin: item });
		}
	}
	let pluginDirWatcher = watch([process.cwd() + '/build/libs/**/index.js', process.cwd() + '/build/libs/*.js']);
	pluginDirWatcher.on('add', path => {
		console.log('ADD FILE', path);
		loadPlugin(path);
	});
	pluginDirWatcher.on('addDir', path => {
		console.log('ADD DIR', path);
		loadPlugin(path);
	});
	createHook(OikubePluginService.PLUGINS_INIT);
}
OikubePluginService.PLUGINS_INIT = `plugins/init`;
OikubePluginService.PLUGIN_START = `plugins/start`;
OikubePluginService.PLUGIN_PREPARE = `plugins/prepare`;
