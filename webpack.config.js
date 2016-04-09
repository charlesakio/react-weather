const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './app/index.js', // App entry point
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    HTMLWebpackPluginConfig,
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
      },
    ],
  },
}
