var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index1:'./src/index1.js',
    index2:'./src/index2.js',
    index3:'./src/index3.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle-[name].js',
  },
  module: {
    loaders: []
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: "commons", filename: "commons.js", minChunks: Infinity})
  ]
}