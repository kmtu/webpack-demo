const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let distName = 'dist';

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin([distName]),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, distName)
  },
};
