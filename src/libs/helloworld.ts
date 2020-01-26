import { OikubePlugin } from '../plugins/plugin';
import { Thing } from '../core/entities/thing';

export default class HelloWorldPlugin extends OikubePlugin {
	name = 'helloworld';
	vendor = 'oikube';
	autostart = true;
	onStart() {
		Thing.findOne({ address: 'helloworld://demo' }).then(found => {
			console.log('FOUND', found);
			found ||
				Thing.create({
					address: 'helloworld://demo',
					vendor: 'helloworld',
					name: 'Helloworld demo',
					description: 'A base helloword thing added by a plugin',
				}).save();
		});
	}
}
