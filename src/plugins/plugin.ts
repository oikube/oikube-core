export abstract class OikubePlugin {
	listenOnChannels: string[] = [];
	readonly name: string;
	loop: NodeJS.Timer;
	interval: number = 1000;

	_start() {
		console.log('STARTING PLUGIN', this.name);
		this.listenOnChannels.forEach(c => {
			// listen to channel
			console.log('channel', c);
		});
		this.onStart && this.onStart();
		this.loop = setInterval(this.activity, this.interval);
	}
	onStart(ctx: any): void {}
	activity() {}
	_stop() {
		clearInterval(this.loop);
		this.listenOnChannels.forEach(c => {
			// listen to channel
			console.log('channel', c);
		});
	}
}
