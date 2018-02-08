/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import path from 'path';
import webpack from 'webpack';
import AssetsPlugin from 'assets-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const clientConfig = {
  entry: {
    index1:'./src/index1.js',
    index2:'./src/index2.js',
    index3:'./src/index3.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle-[name].js',
    publicPath: process.env.ASSET_PATH || '/'
  },
  module: {
    loaders: []
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name: "commons", filename: "commons.js", minChunks: Infinity})
  ],
  target: 'web'
}

export default clientConfig;
