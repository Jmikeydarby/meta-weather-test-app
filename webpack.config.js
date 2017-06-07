'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './browser/main.jsx',
  output: {
    path: path.resolve('public'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  }
};
