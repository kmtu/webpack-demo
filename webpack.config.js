const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let distName = 'dist';

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin([distName]),
    new HtmlWebpackPlugin({
      title: 'Caching'
    })
  ],
  output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, distName)
  },
};
