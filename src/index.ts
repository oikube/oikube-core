import consul from './connectors/consul';
import conf from './defs/config';
import { OikubeQueueService } from './connectors/amqp';
import { OikubeCoreService } from './core';
import { OikubePluginService } from './plugins';
import { OikubeAutomationService } from './automations';
import { runHookApp } from '@forrestjs/hooks';

function oikubePostStartService() {
	// read config
	consul.kv.get('pippo');
}

runHookApp({
	// optional debug helper
	// try also "full"
	trace: 'compact',

	// settings can be just an object, or an sync/async function
	settings: conf,

	// services can do some cool stuff that features can't ;-)
	// they boot before features, so features can count on stuff
	// that is provided by the services.
	services: [
		OikubeCoreService,
		OikubeQueueService,
		OikubePluginService,
		OikubeAutomationService,
		oikubePostStartService,
	],

	// package your business values into small feature that is easy
	// to work with.
	features: [],
}).catch(console.log);
