/** @type {import('webpack').Configuration} */
const CommonConfig = require('./webpack.common');

const webpack = require('webpack');
const { merge } = require('webpack-merge');

const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge({
  mode: 'production',
  module: {
    rules: [
      {
        test:/\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              esModule: false,
              name: './img/[name].[contenthash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/
    }),
    new webpack.DefinePlugin({
      BASE_URL : JSON.stringify("./public/")
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/*.ico',
          to: './'
        }
      ]
    })
  ]
},CommonConfig)