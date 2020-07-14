/** @type {import('webpack').Configuration} */
const path = require('path');

const CommonConfig = require('./webpack.common');

const webpack = require('webpack');
const { merge } = require('webpack-merge');

module.exports = merge({
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL : JSON.stringify("/public/")
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname,'dist'),
    compress:false,
    port: 9000,
    open: true
  }
},CommonConfig)