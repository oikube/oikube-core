import { MqttClient, connect } from "mqtt";
import conf from "../defs/config";

export default class Broker {
	client: MqttClient;
	connect() {
		this.client = connect(conf.MQTT);
		this.client.on("message", function(topic, message) {
			// message is Buffer
			console.log(topic, message.toString());
		});
	}
}
