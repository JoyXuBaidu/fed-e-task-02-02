/** @type {import('webpack').Configuration} */
const path = require('path');

const CommonConfig = require('./webpack.common');

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(CommonConfig,{
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
    // new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname,'dist'),
    compress:false,
    port: 9000,
    open: true,
    hot: true
  }
})