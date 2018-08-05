'use strict';

const express = require('express');
const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const server = express();
const axios = require('axios');

const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const requestProxy = require('express-request-proxy');

const qs = require('qs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const performanceData = '../src/static/json/performanceData.json';

dotenv.config();
// compression & security
server.disable('x-powered-by');
server.use(compression());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cookieParser());

// DEV Mode webpack with hot reloader
if (process.env.NODE_ENV !== 'production') {
  const webpackConfig = require('./webpack.dev.config');
  const webpackCompiler = webpack(webpackConfig);
  server.use(webpackDev(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  }));
  server.use(webpackHot(webpackCompiler));
}
server.use('/', express.static(path.join(__dirname, '/dist')));
server.use('/img', express.static(path.join(__dirname, '/src/static/img')));

// TODO: convert this into a helper
const headersAuth = (zopaJwt = null) => {
  const bearerKey = '';
  const accountKey = '';
  // console.log(account);
  return {
    Authorization: bearerKey,
    'Content-Type': 'application/json',
    'on-behalf-of': accountKey,
    Accept: 'application/json',
  };
};

// this endpoint was use to fetch api
server.get('/performance/', (req, res) => {
  axios(process.env.RIALTO_API_URI + '/lending/performance?minimumDaysForChartData=365', {
    headers: headersAuth(req.cookies.zopaIPAT),
    method: 'GET',
  }).then((response) => {
    res.send(JSON.stringify(response.data));
  }).catch((error) => {
    console.log('there was an error', error);
    res.status(400).send('Bad request');
  });
})

let port ;
if (process.env.NODE_ENV !== 'production') {
  port = process.env.LOCAL_PORT;
} else {
  port = process.env.PORT || process.env.LOCAL_PORT;
}
server.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('');
    console.log('Server listening on port ' + port);
    console.log('');
  }
});
