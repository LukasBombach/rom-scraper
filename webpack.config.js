const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index: ['babel-polyfill', './src/index.js'],
    development: ['babel-polyfill', './src/development.js']
  },
  output: {
    path: './lib/',
    filename: '[name].js',
    library: 'rom-scraper',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  target: 'node',
  externals: [nodeExternals()]
};
