import { OikubePlugin } from '../plugins/plugin';
import { Thing } from '../core/entities/thing';
import fetch from 'node-fetch';
import { parseStringPromise } from 'xml2js';

export default class IPX800Plugin extends OikubePlugin {
	name = 'ipx800';
	vendor = 'ipx800';
	autostart = true;
	defaultConfig = {};
	onAutodiscover() {
		// search devices on local network
	}
	activity() {
		this.pluginConfig.devices &&
			this.pluginConfig.devices.forEach(device => {
				// read device status file
				const address = `${device.protocol || 'http'}://${device.host}:${device.port || 80}`;
				fetch(`${address}/status.xml`)
					.then(res => res.text())
					.then(body => parseStringPromise(body))
					.then(async content => {
						console.log('IPX800', content.response);
						// add thing 'isGateway' for the device
						const board = await Thing.upsert({
							address,
							vendor: this.vendor,
							name: device.name || `${this.name} board`,
							description: `${this.vendor} board @ ${address}`,
							isGateway: true,
							currentValue: content.response.version[0],
						});

						// foreach thing create a record
						Object.keys(content.response).forEach(el => {
							el.startsWith('led') &&
								Thing.upsert({
									address: `${address}/${el}`,
									vendor: this.vendor,
									name: (device.name || this.name) + ` ${el}`,
									description: `${this.vendor} board variable @ ${address}/${el}`,
									currentValue: content.response[el][0],
									parent: board.id,
								});
							el.startsWith('btn') &&
								Thing.upsert({
									address: `${address}/${el}`,
									vendor: this.vendor,
									name: (device.name || this.name) + ` ${el}`,
									description: `${this.vendor} board variable @ ${address}/${el}`,
									currentValue: content.response[el][0],
									parent: board.id,
								});
						});
					})
					.catch(err => {
						console.log('ERROR IN IPX800 AUTODISCOVER'), err;
					});
			});
	}
	onStart() {}
}
