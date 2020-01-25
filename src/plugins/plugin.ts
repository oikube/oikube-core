import { Plugin } from '../core/entities/plugin';

export abstract class OikubePlugin {
	listenOnChannels: string[] = [];
	readonly name: string;
	readonly vendor: string;
	readonly autostart: boolean;
	loop: NodeJS.Timer;
	interval: number = 1000;
	private pluginConfig: Plugin;
	_register() {
		// check wether the plugin is on db and add it if necessary
		Plugin.findOne({ name: this.name }).then(async found => {
			this.pluginConfig = found ? found : await Plugin.create({ name: this.name, vendor: this.vendor }).save();
			if (this.pluginConfig.isActive || this.autostart) this._start();
		});
	}
	_deRegister() {
		// remove a plugin
		this._stop();
		Plugin.delete(this.pluginConfig.id);
	}
	private _start() {
		this.pluginConfig.isActive = true;
		this.pluginConfig.save();
		console.log('STARTING PLUGIN', this.name);
		this.listenOnChannels.forEach(c => {
			// listen to channel
			console.log('channel', c);
		});
		this.onStart && this.onStart();
		this.loop = setInterval(this.activity, this.interval);
	}
	onStart(): void {}
	activity() {}
	_stop() {
		clearInterval(this.loop);
		this.listenOnChannels.forEach(c => {
			// listen to channel
			console.log('channel', c);
		});
	}
}
