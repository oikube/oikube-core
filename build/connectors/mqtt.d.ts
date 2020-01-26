import { MqttClient } from 'mqtt';
export default class Broker {
    client: MqttClient;
    connect(): void;
}
