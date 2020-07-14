/** @type {import('webpack').Configuration} */
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: '[contenthash:8].bundle.js',
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
        use: ['css-loader','less-loader']
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
    })
  ]
}