/** @type {import('webpack').Configuration} */
const CommonConfig = require('./webpack.common');

const { merge } = require('webpack-merge');

const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = merge(CommonConfig,{
  mode: 'production',
  devtool: false,
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
    })
  ]
})