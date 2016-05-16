const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: '.',
    filename: 'index.js'
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
