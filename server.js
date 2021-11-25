const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express()
const config  = require('./webpack.config.js')
const compiler = webpack(config)

//tell webpacl to use webpack-Dev-Middleware and  use the webpack.config.js
//config file as a base
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

// serve the files on port 3000
app.listen(3000, function (){
  console.log('ayy wassup bro i do be on port 3000(?)')
});
