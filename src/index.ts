import consul from './connectors/consul';
import { OikubeQueueService } from './connectors/amqp';
import conf from './defs/config';

import { Container } from 'typedi';

import { OikubeCoreService } from './core';
import { OikubePluginManager } from './plugins';
import { OikubeAutomationService } from './automations';
import { runHookApp } from '@forrestjs/hooks';

function oikubeService({ createHook }) {
	let { PLUGINS_INIT } = oikubeService;
	// read config
	consul.kv.get('pippo');

	// init plugins
	const oikubePluginManager = Container.get(OikubePluginManager);
	oikubePluginManager.loadPlugins();
	createHook(PLUGINS_INIT);
}
oikubeService.AUTOMATIONS_INIT = `automations/init`;
oikubeService.SETTINGS_INIT = `settings/init`;
oikubeService.PLUGINS_INIT = `plugins/init`;
oikubeService.API_INIT = `api/init`;
oikubeService.AMQP_INIT = `amqp/init`;

runHookApp({
	// optional debug helper
	// try also "full"
	trace: 'compact',

	// settings can be just an object, or an sync/async function
	settings: conf,

	// services can do some cool stuff that features can't ;-)
	// they boot before features, so features can count on stuff
	// that is provided by the services.
	services: [OikubeCoreService, OikubeQueueService, OikubeAutomationService, oikubeService],

	// package your business values into small feature that is easy
	// to work with.
	features: [],
}).catch(console.log);
