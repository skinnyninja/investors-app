const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
    entry: {
      main:'./src/index.tsx'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: "awesome-typescript-loader"
        },
        {
          test: /\.scss$/,
          use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test: /\.(png|jpg|svg)$/,
          use: [{
            loader: 'file-loader',
            options: {
              // emitFile: false,
              name: '[name].[ext]',
              outputPath: 'img/'
            }
          }]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: [{
            loader: 'url-loader?limit=100000',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }]
        }
      ]
    },
    mode: 'production',
    devtool: 'eval-source-map',
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.DefinePlugin(envKeys),
      new MiniCssExtractPlugin({
        filename: '[name].style.css',
        chunkFilename: "[id].css"
      }),
      new CopyWebpackPlugin([
        { from:'src/static/img', to: 'img' } 
      ]), 
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html'
      }),
      // new Dotenv(),
    ],
};