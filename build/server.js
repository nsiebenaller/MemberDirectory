'use strict';

// env

require('dotenv').config();
var IS_DEV = process.env.IS_DEV;

// dependencies

var Promise = require('bluebird');
var log = require('./logger.js');
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var jwt = require('express-jwt');

var app = express();

if (IS_DEV === 'true') {
  var webpackDevMiddleware = require("webpack-dev-middleware");
  var webpackHotMiddleware = require("webpack-hot-middleware");
  var webpackConfig = require('../webpack.config.js');
  var compiler = webpack(webpackConfig);
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));
  app.use(require("webpack-hot-middleware")(compiler));
}

app.use(express.json());
app.use(require('helmet')()); // use helmet
app.use(require('cors')()); // enable CORS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/../public'));

// PROTECTED PATHS
var checkToken = {
  secret: 'secret',
  getToken: function getToken(req) {
    if (req.headers['x-access-token']) return req.headers['x-access-token'];else return null;
  }
};
app.use(['/api/members/*', '/api/members'], jwt(checkToken));

var router = require('./routes/index');
app.use('/', router);
app.use('/', function (req, res) {
  return res.redirect('/');
});

var port = process.env.PORT || 8000;
var server = require('http').Server(app);

var version = 'Express-Boilerplate v' + require('../package.json').version;
// start server
server.listen(port, function () {
  log.info('IS RUNNING IN DEV:: ' + IS_DEV);
  log.info('' + version);
  log.info('==>  \uD83D\uDCBB  Listening on Port ' + port + '  \uD83D\uDCBB  <==');
});