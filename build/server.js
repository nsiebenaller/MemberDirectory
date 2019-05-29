'use strict';

require('babel-polyfill');
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
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

// if(IS_DEV === 'true') {
//   const webpackDevMiddleware = require("webpack-dev-middleware")
//   const webpackHotMiddleware = require("webpack-hot-middleware")
//   var webpackConfig = require('../webpack.config.js')
//   var compiler = webpack(webpackConfig);
//   app.use(require("webpack-dev-middleware")(compiler, {
//       noInfo: true, publicPath: webpackConfig.output.publicPath
//   }))
//   app.use(require("webpack-hot-middleware")(compiler))
// }

app.use(express.json());
app.use(require('helmet')()); // use helmet
app.use(require('cors')()); // enable CORS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/../public'));
var opts = {
  extensions: ["js"],
  setHeaders: function setHeaders(res, path, stat) {
    res.set("Content-type", "text/javascript");
  }
};
app.use(express.static(__dirname + '/../public', opts));

// PROTECTED PATHS
var checkAuthorization = function checkAuthorization(req, res, next) {
  var token = req.cookies.frcctoken;
  if (!token) {
    res.clearCookie('frcctoken');
    res.send(401, 'Invalid or missing authorization token');
  } else {
    var verified = jwt.verify(token, 'secret');
    console.log(verified);
  }
};
var checkToken = {
  secret: 'secret',
  getToken: function getToken(req) {
    return req.cookies.frcctoken;
  }
};

app.use(['/api/tags', '/api/tags/*', '/api/members/*', '/api/members'], jwt(checkToken));

//Redirect all to root
var router = require('./routes/index');
app.use('/', router);
app.use('/', function (req, res) {
  return res.redirect('/');
});

var port = process.env.PORT || 8000;
var server = require('http').Server(app);

var version = 'Member Directory v' + require('../package.json').version;
// start server
server.listen(port, function () {
  log.info('IS RUNNING IN DEV:: ' + IS_DEV);
  log.info('' + version);
  log.info('==>  \uD83D\uDCBB  API Listening on Port ' + port + '  \uD83D\uDCBB  <==');
});