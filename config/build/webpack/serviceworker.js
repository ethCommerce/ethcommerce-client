const config = require('sapper/config/webpack.js');
const { typescriptLoader } = require('../utils');
const webpackConfig = require('./base');

module.exports = webpackConfig({
	entry: { 'service-worker': config.serviceworker.entry()['service-worker'].replace(/\.js$/, '.ts') },

	output: config.serviceworker.output(),

	resolve: { extensions: ['.mjs', '.js', '.ts', '.json'] },

	module: {
		rules: [
			typescriptLoader(),
		],
	},
});