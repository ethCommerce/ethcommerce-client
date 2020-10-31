const webpack = require('webpack');
const env = require('../env');
const { babelLoader, fileLoader, svelteLoader, typescriptLoader } = require('../build/utils');
const webpackConfig = require('../build/webpack/base');

module.exports = webpackConfig({
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
      typescriptLoader({
        configFile: require.resolve('./tsconfig.json'),
      }),
    ]
  },
});