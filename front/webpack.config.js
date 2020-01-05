const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.join(__dirname, '/bundle'),
    filename : 'index_bundle.js'
  },
  devServer: {
    inline: true,
    port: 8080
    },
  module: {
    rules: [
      {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/env', '@babel/react']
        }
      },
      {
      test: /\.css$/,
      use: [
	'style-loader',
	'css-loader'
        ]
      }
    ]
  },