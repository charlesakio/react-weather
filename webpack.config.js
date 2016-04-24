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
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './app/index.js', // Your appʼs entry point
    
    //'./app/index.js', // App entry point
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin()
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loaders: ['react-hot','babel-loader'],
      },
    ],
  },
}
