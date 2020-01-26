import { Plugin } from '../core/entities/plugin';
import { config } from '../defs/config';
export abstract class OikubePlugin {
	readonly listenOnChannels: string = '';
	readonly name: string;
	readonly vendor: string;
	readonly autoStart: boolean;
	readonly defaultConfig: object;
	isActive: boolean;
	activityLoop: NodeJS.Timer;
	interval: number = 10000;
	private pluginModel: Plugin;
	protected pluginConfig = { devices: [] };
	_register() {
		// find config or use default
		this.pluginConfig = config[this.name] || this.defaultConfig;

		// check wether the plugin is on db and add it if necessary
		Plugin.findOne({ name: this.name }).then(async found => {
			this.pluginModel = found
				? found
				: await Plugin.create({
						name: this.name,
						vendor: this.vendor,
						autoStart: this.autoStart,
						listenOnChannels: this.listenOnChannels,
				  }).save();
			if (this.pluginModel.autoStart) this._start();
		});
	}
	_deRegister() {
		// remove a plugin
		this._stop();
		Plugin.delete(this.pluginModel.id);
	}
	private _start() {
		this.isActive = true;
		this.pluginModel.save();
		console.log('STARTING PLUGIN', this.name);
		this.pluginModel.listenOnChannels.split(',').forEach(c => {
			// listen to channel
			console.log('channel', c);
		});
		this.onStart && this.onStart();
		this.onAutodiscover && this.onAutodiscover();
		this.activityLoop = setInterval(this.activity.bind(this), this.interval);
		this.isActive = true;
	}
	onStart(): void {}
	onAutodiscover(): void {}
	activity() {}
	_stop() {
		this.isActive = false;
		clearInterval(this.activityLoop);
		this.pluginModel.listenOnChannels.split(',').forEach(c => {
			// listen to channel
			console.log('channel', c);
		});
	}
}
