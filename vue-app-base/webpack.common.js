/** @type {import('webpack').Configuration} */
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
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
      },
      {
        test:/\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
}