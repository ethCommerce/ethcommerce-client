const webpack = require('webpack');
const config = require('sapper/config/webpack.js');
const env = require('../../env');
const { babelLoader, fileLoader, svelteLoader, typescriptLoader } = require('../utils');
const webpackConfig = require('./base');

module.exports = webpackConfig({
	entry: config.client.entry(),

	output: config.client.output(),

	plugins: [
		// pending https://github.com/sveltejs/svelte/issues/2377
		// dev && new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.browser': true,
			'process.env.NODE_ENV': env.ENV,
		}),
	].filter(Boolean),

	module: {
		rules: [
			svelteLoader({
				hydratable: true,
				hotReload: true,
			}),
			babelLoader(),
			typescriptLoader(),
			fileLoader(),
		]
	},
});