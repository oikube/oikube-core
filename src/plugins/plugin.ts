export class OikubePlugin {
	listenOnChannels: string[] = [];
	name: string;
	loop: NodeJS.Timer;
	register(name: string) {
		this.name = name;
	}

	_start() {
		this.listenOnChannels.forEach(c => {
			// listen to channel
			console.log('channel', c);
		});
		this.onStart && this.onStart();
		this.loop = setInterval(this.activity, 1000);
	}
	onStart() {}
	activity() {}
	_stop() {
		clearInterval(this.loop);
		this.listenOnChannels.forEach(c => {
			// listen to channel
			console.log('channel', c);
		});
	}

	deregister() {}
}
