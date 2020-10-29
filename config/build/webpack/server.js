const WebpackModules = require('webpack-modules');
const config = require('sapper/config/webpack.js');
const { babelLoader, fileLoader, svelteLoader, typescriptLoader } = require('../utils');
const pkg = require('../../../package.json');
const webpackConfig = require('./base');

module.exports = webpackConfig({
	entry: { server: config.server.entry().server.replace(/\.js$/, '.ts') },

	output: config.server.output(),

	target: 'node',

	externals: Object.keys(pkg.dependencies).concat('encoding'),

	module: {
		rules: [
			svelteLoader({
				css: false,
				generate: 'ssr',
				hydratable: true,
			}),
			babelLoader(),
			typescriptLoader(),
			fileLoader(),
		]
	},

	plugins: [
		new WebpackModules()
	],

	performance: {
		hints: false // it doesn't matter if server.js is large
	}
});