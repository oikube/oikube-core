import 'reflect-metadata';
import { HelloWorldPlugin } from './helloworld/loader';
import { OikubePlugin } from './plugin';
import { Service } from 'typedi';

@Service()
export class OikubePluginManager {
	plugins: OikubePlugin[] = [];
	loadPlugins() {
		this.plugins.push(new HelloWorldPlugin());

		this.plugins.forEach(p => {
			p._start();
		});
	}
}
