const env = require('../env');

const globals = {};

for (const key of Object.keys(env)) {
	globals[key] = 'readonly';
}

module.exports = {
	root: true,

	env: {
		browser: true,
		node: true,
		serviceworker: true,
	},

	extends: [
		'plugin:@typescript-eslint/recommended',
		'.eslintrc.base.json'
	],

	parser:  '@typescript-eslint/parser',

	plugins:  [
		'svelte3',
		'@typescript-eslint'
	],

	globals,

	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3'
		}
	]
};