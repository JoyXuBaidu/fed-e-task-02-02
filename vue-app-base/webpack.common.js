/** @type {import('webpack').Configuration} */
const path = require('path');
const devMode = process.env.NODE_ENV ===  'development';

const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: devMode ? './js/bundle.[hash:8].js' : './js/bundle.[contenthash:8].js',
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: devMode,
              reloadAll: true
            },
          },
          'css-loader','less-loader']
      },
      {
        test:/\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
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
      },
      {
        test: /\.js$/,
        use: 'eslint-loader'
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
      filename: devMode ? './css/[name].[hash:8].css' :'./css/[name].[contenthash:8].css'
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
}