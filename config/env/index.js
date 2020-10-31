const NODE_ENV = process.env.NODE_ENV || 'production';

const envs = {
	default: {
		ENV: NODE_ENV,
		DEBUG: process.env.DEBUG || false,
		PROTOCOL: process.env.PROTOCOL || 'http',
		HOST: process.env.HOST || 'localhost',
		PORT: process.env.PORT || 3000,
	},
	development: require('./development'),
	production: require('./production'),
	local: {},
};

try {
	envs.local = require('./local');
} catch(e) {}

const env = Object.assign(envs.default, envs[NODE_ENV], envs.local);

for (const key of Object.keys(env)) {
	env[key] = JSON.stringify(env[key]);
}

module.exports = env;