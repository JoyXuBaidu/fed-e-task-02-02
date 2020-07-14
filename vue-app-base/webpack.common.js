/** @type {import('webpack').Configuration} */
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: './js/bundle.[contenthash:8].js',
    path: `${__dirname}/dist`
  },
  module:{
    rules: [
      {
        test:/\.vue$/,
        use: 'vue-loader'
      },
      {
        test:/\.less$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','less-loader']
      },
      {
        test:/\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].[contenthash:8].css'
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
}