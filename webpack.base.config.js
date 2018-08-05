const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        test: /\.(js)$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.scss$/,
        use:  [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
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
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    module: 'empty',
    os: 'empty'
  }
};