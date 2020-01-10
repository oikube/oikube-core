import { connect, Channel, ConsumeMessage } from "amqplib";

const Topics = {
	system: {
		log: {
			warn: "",
			info: "",
			error: "",
			debug: ""
		},
		services: {
			health: "Some service started or stopped"
		},
		users: {
			presence: "some user logged in or out"
		}
	},
	devices: {
		$name: {
			value: "A device changed its value"
		}
	},
	areas: {
		$name: {
			created: "A area was created"
		}
	},
	conditions: {
		$name: {
			state: "A condition state changed"
		}
	},
	command: {
		$name: {
			fire: "Fire a command"
		}
	}
};

export default class QueueManager {
	channel: Channel;
	init(server: string) {
		return this.connect(server).then(() => {
			this.initTopics();
		});
	}
	connect(server: string) {
		return connect(server).then(conn => {
			return conn.createChannel().then(ch => (this.channel = ch));
		});
	}
	createQueue(name: string) {
		return this.channel && this.channel.assertQueue(name);
	}
	enqueue(queue: string, message: any) {
		return (
			this.channel &&
			this.channel.sendToQueue(queue, Buffer.from(message))
		);
	}
	onQueueMessage(
		queue: string,
		worker?: (msg: ConsumeMessage | null) => any | null
	) {
		return this.channel.consume(
			queue,
			worker
				? worker
				: (msg: ConsumeMessage) => {
						console.log(msg.content.toString());
						this.channel.ack(msg);
				  }
		);
	}
	createTopic(exchangeName: string) {
		this.channel.assertExchange(exchangeName, "topic", {
			durable: false
		});
	}
	publish(exchangeName: string, topic: string, msg: any) {
		this.channel.publish(
			exchangeName,
			topic,
			Buffer.from(JSON.stringify(msg))
		);
	}
	subscribe(topic: string, consumer: (msg: any) => any) {
		this.channel.consume(topic, (msg: ConsumeMessage) => {
			let data = msg.content.toJSON();
			return consumer(data);
		});
	}
	initTopics() {
		Object.keys(Topics).forEach((t: string) => {
			Object.keys(Topics[t]).forEach((s: string) => {
				!s.startsWith("$") &&
					Object.keys(t[s]).forEach((u: string) => {
						this.createTopic([t, s, u].join("."));
					});
			});
		});
	}
}
