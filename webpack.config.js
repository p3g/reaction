var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  context: path.join(__dirname, ''),
  output: {
   path: path.join(__dirname, 'bin'),
   filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        loaders: ['style','css']
      }
    ]
  },
sassLoader: {
 includePaths: [
   path.resolve(__dirname, "./node_modules/materialize-sass/sass/")
 ]
}
};
