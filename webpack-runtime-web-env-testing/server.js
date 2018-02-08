const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
// a=require('./webpack.config.js');
// console.log(a);
// const compiler = webpack({ .. webpack options .. });
const compiler = webpack(require('./webpack.config.js').default);
const express = require('express');
const app = express();

app.use(middleware(compiler, {
  // webpack-dev-middleware options
}));

app.listen(3333, () => console.log('Example app listening on port 3333! try get http://127.0.0.1:3333/bundle-index2.js'))
