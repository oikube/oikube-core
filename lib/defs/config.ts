const env = "dev";
const conf = {
	dev: {
		CONSUL: "192.168.12.58",
		RABBITMQ: "amqp://192.168.12.58",
		MQTT: "wss://192.168.12.58:15675/ws",
		JWT_SECRET: ""
	},
	prod: {
		CONSUL: "consul",
		RABBITMQ: "amqp://rabbitmq",
		MQTT: "wss://rabbitmq:15675/ws",
		JWT_SECRET: ""
	},
	local: {
		CONSUL: "localhost",
		RABBITMQ: "amqp://localhost",
		MQTT: "wss://localhost:15675/ws",
		JWT_SECRET: ""
	}
};

export default conf[env];
