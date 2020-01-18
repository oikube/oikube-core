import consul from "./connectors/consul";
import QueueManager from "./connectors/amqp";
import conf from "./defs/config";
import { bootstrap } from "./core";

// init AMQP
let qm = new QueueManager();
qm.init(conf.RABBITMQ);

// read config
consul.kv.get("pippo");

// init model and API
bootstrap();

// init automations

console.log("READ");
