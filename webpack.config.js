"use strict";
const webpack = require('webpack');
const path    = require('path');

let webpackConfig = {
  entry: "./src/client/app.jsx",
  output: {
    path:path.resolve(__dirname, 'dist/assets/js/'),
    filename: "bundle.js"
  },
  mode:"development",
  resolve:{
    modules:[
      "node_modules",
      path.join(__dirname, 'client')
    ],
    extensions: [".webpack.js", ".web.js", ".js", '.jsx']
  },
  module:{
    rules: [
      {
        test: /(\.jsx$|\.js$)/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  context: __dirname,
};

module.exports = webpackConfig;