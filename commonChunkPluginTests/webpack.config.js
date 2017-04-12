var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle-[name].js',
  },
  module: {
    loaders: []
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: "commons", filename: "commons.js"})
  ]
}