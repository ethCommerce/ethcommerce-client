const path = require('path');
const sveltePreprocess = require('svelte-preprocess');
const postcssNested = require('postcss-nested');
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const env = require('../env');

const paths = module.exports.paths = {
	context: path.resolve(__dirname, '../..'),
	babelConfig: require.resolve('./babel'),
	tsConfig: require.resolve('./tsconfig'),
	tailwindConfig: require.resolve('./tailwind'),
};

const babel = {
	configFile: paths.babelConfig,
};

module.exports.babelLoader = function(options) {
	return {
		test: /\.js$/,
		use: {
			loader: 'babel-loader',
			options: {
				...babel,
				...options,
			},
		},
	};
};

const typescript = {
	context: paths.context,
	configFile: paths.tsConfig,
};

module.exports.typescriptLoader = function(babelOptions = {}, typescriptOptions = {}) {
	return {
		test: /\.ts$/,
		use: [{
			loader: 'babel-loader',
			options: {
				...babel,
				...babelOptions,
			},
		}, {
			loader: 'ts-loader',
			options: {
				...typescript,
				...typescriptOptions,
			},
		}],
	};
};

const preprocess = sveltePreprocess({
	postcss: {
		plugins: [
			postcssImport(),
			postcssNested(),
			tailwindcss(paths.tailwindConfig),
			autoprefixer(),
		]
	}
});

module.exports.svelteLoader = function(options) {
	return {
		test: /\.(svelte|html)$/,
		use: {
			loader: 'svelte-loader',
			options: {
				dev: env.ENV === 'development',
				preprocess,
				...options,
			},
		}
	};
};

module.exports.fileLoader = function(options) {
	return {
		test: /\.(png|jpe?g|gif)$/i,
		use: [{
			loader: 'file-loader',
			options,
		}],
	};
};