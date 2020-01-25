import Consul = require('consul');
import conf from '../defs/config';

const consulClient = Consul({
	host: conf.CONSUL,
	promisify: true,
});

export default consulClient;
