import { OikubePlugin } from '../../index';
export class HelloWorldPlugin extends OikubePlugin {
	onStart() {
		this.register('HelloWorld');
		console.log('Helloworld starting');
	}
}
