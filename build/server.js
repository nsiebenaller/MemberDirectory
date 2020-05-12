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
var expressJWT = require('express-jwt');
var jsonwebtoken = require('jsonwebtoken');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());

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
var checkToken = {
	secret: 'secret',
	getToken: function getToken(req) {
		var token = req.cookies.frcctoken;
		if (!token) {
			return null;
		} else {
			try {
				var verified = jsonwebtoken.verify(token, 'secret');
				if (verified.revoked) return null;
			} catch (e) {
				return null;
			}
		}
		return token;
	}
};

app.use(['/api/ping', '/api/tags', '/api/tags/*', '/api/members/*', '/api/members'], expressJWT(checkToken));

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