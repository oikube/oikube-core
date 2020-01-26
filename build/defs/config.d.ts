declare function readConf(): any;
export declare let config: typeof readConf;
export declare function saveConf(): void;
declare const _default: {
	CONSUL: string;
	RABBITMQ: string;
	MQTT: string;
	JWT_SECRET: string;
	PORT: number;
};
export default _default;
