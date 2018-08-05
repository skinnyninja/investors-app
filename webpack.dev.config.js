const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const dotenv = require('dotenv');

const BaseConfig = require('./webpack.base.config')

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports =  Object.assign({}, BaseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(envKeys),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].style.css',
      sourceMap: true 
    }),
    new CopyWebpackPlugin([
      { from:'src/static/img', to: 'img' } 
    ]), 
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      filename: 'index.html'
    }),
    new Visualizer({
      filename: './stats.html'
    }),
  ],
});
