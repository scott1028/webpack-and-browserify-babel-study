const path = require('path');

console.log('test:', path.resolve(__dirname, '/node_modules/lodash/get'));

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      // Ref: https://webpack.js.org/configuration/resolve/#resolvealias
      //      A trailing $ can also be added to the given object's keys to signify an exact match.
      //      Only $ supported.
      // 
      // Only "$" work, "^" is not working.
      // CASE-01: ok
      [`${path.resolve(__dirname, 'node_modules/lodash/get')}$`]: path.resolve(__dirname, 'src/lib'),
      // CASE-02: ok
      // ['lodash/get$']: path.resolve(__dirname, 'src/lib'),
      // CASE-03: fail
      // [`^${path.resolve(__dirname, 'node_modules/lodash/get')}`]: path.resolve(__dirname, 'src/lib'),
      // CASE-04: fail
      // ['^lodash/get']: path.resolve(__dirname, 'src/lib'),
    },
  },
  optimization: {
    minimize: false,
  },
};
