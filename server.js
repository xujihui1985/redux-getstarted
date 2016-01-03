'use strict';

const express = require('express');
const app = express();
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));


app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));

app.get('/api/data', (req, res) => res.send({
  hello: 'world'
}));

const server = app.listen(3000, ()=>{
  const host = server.address().address;
  const port = server.address().port;

  console.log(`app listening at host ${host} port ${port}`);
});


