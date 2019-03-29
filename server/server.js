'use strict'

// env
require('dotenv').config()
const {IS_DEV} = process.env

// dependencies
const Promise = require('bluebird')
const log = require('./logger.js')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const jwt = require('express-jwt')

const app = express()

if(IS_DEV === 'true') {
  const webpackDevMiddleware = require("webpack-dev-middleware")
  const webpackHotMiddleware = require("webpack-hot-middleware")
  var webpackConfig = require('../webpack.config.js')
  var compiler = webpack(webpackConfig);
  app.use(require("webpack-dev-middleware")(compiler, {
      noInfo: true, publicPath: webpackConfig.output.publicPath
  }))
  app.use(require("webpack-hot-middleware")(compiler))
}

app.use(express.json())
app.use(require('helmet')()) // use helmet
app.use(require('cors')()) // enable CORS
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(express.static(`${__dirname}/../public`))

// PROTECTED PATHS
const checkToken = {
  secret: 'secret',
  getToken: (req) => {
    if(req.headers['x-access-token']) return req.headers['x-access-token']
    else return null
  }
}
app.use(['/api/tags', '/api/tags/*', '/api/members/*', '/api/members'], jwt(checkToken))

const router = require('./routes/index')
app.use('/', router)
app.use('/', (req, res) => res.redirect('/'))

const port = process.env.PORT || 8000
const server = require('http').Server(app)

const version = `Express-Boilerplate v${require('../package.json').version}`
// start server
server.listen(port, () => {
  log.info(`IS RUNNING IN DEV:: ${IS_DEV}`)
  log.info(`${version}`)
  log.info(`==>  💻  Listening on Port ${port}  💻  <==`)
})
