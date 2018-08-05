const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin');
const dotenv = require('dotenv');

const BaseConfig = require('./webpack.base.config')

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports =  Object.assign({}, BaseConfig, {
    output: Object.assign({}, BaseConfig.output, {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
    }),
    mode: 'production',
    devtool: 'source-map',
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production',
        DEBUG: false
      }),
      new webpack.DefinePlugin(envKeys),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|html)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].style.css',
        sourceMap: true
      }),
      new CopyWebpackPlugin([{
        from:'src/static/img',
        to: 'img'
      }]), 
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        sourceMap: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          sourceMap: true,
          cache: true,
          parallel: true,
        }),
        new OptimizeCSSAssetsPlugin({})
      ],
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'async'
          }
        }
      }
    }
});