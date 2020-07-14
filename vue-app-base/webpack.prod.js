/** @type {import('webpack').Configuration} */

const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  plugins: [
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/
    })
  ]
}