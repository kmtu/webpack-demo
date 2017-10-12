const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let distName = 'dist';

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin([distName]),
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ],
  output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, distName)
  },
};
