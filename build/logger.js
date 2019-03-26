'use strict';

/*
  Custom wrapper over Bunyan to pretty-print to console, while logging full JSON to log files
  needed b/c Bunyan doesn't support it except for CLI/pipe
  example usage: "const log = require('./logger.js); log.info('Log initiated.');"
*/

var bunyan = require('bunyan');

// custom stream to pretty-print
var Stream = require('stream');

var prettystream = new Stream();
prettystream.writable = true;
prettystream.write = function (obj) {
  return console.log(JSON.parse(obj).msg);
};

// routes JSON log content to several places...
module.exports = bunyan.createLogger({
  name: 'general-log',
  streams: [{
    level: 'info',
    stream: prettystream
  }, {
    level: 'error',
    path: './logs/bunyan-error.log'
  }, {
    level: 'debug',
    path: './logs/bunyan-debug.log'
  }]
});