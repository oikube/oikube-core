import consul from './connectors/consul';
import { QueueManager } from './connectors/amqp';
import conf from './defs/config';

import { Container } from 'typedi';

import { OikubeCore } from './core';
export { OikubePlugin } from './plugins/plugin';
import { OikubePluginManager } from './plugins';
import { OikubeAutomationManager } from './automations';

// init AMQP
const queueManager = Container.get(QueueManager);
queueManager.init(conf.RABBITMQ);

// read config
consul.kv.get('pippo');

// init model and API
const oikubeCore = Container.get(OikubeCore);
oikubeCore.bootstrap();

// init plugins
const oikubePluginManager = Container.get(OikubePluginManager);
oikubePluginManager.loadPlugins();

// init automations
const oikubeAutomationManager = Container.get(OikubeAutomationManager);
oikubeAutomationManager.startDispatching();

console.log('READ');
