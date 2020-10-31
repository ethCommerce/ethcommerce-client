const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const env = require('../../env');

const alias = {
	'svelte': path.resolve('node_modules', 'svelte'),
	'@': path.resolve('src'),
	'@config': path.resolve('config'),
};

const extensions = ['.ts', '.tsx', '.mjs', '.js', '.json', '.svelte', '.html'];

const mainFields = ['svelte', 'module', 'browser', 'main'];

const ENV = JSON.parse(env.ENV);

module.exports = function webpackConfig(config) {
	return merge({
		mode: ENV || 'development',

		devtool: ENV === 'development' && 'inline-source-map',

		resolve: { alias, extensions, mainFields },

		plugins: [
			new webpack.DefinePlugin(env),
		],
	}, config);
}