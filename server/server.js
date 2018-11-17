'use strict'

// dependencies
const Promise = require('bluebird')
const log = require('./logger.js')
const express = require('express')
const webpack = require('webpack')
const jwt = require('express-jwt')

const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")



const router = require('./routes/index')

const app = express()

var webpackConfig = require('../webpack.config.js')
var compiler = webpack(webpackConfig);
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}))
app.use(require("webpack-hot-middleware")(compiler))

app.use(require('helmet')()) // use helmet
app.use(require('cors')()) // enable CORS
app.use(
  jwt({
    secret: 'secret',
    getToken: (req) => {
      if(req.headers['x-access-token']) return req.headers['x-access-token']
      else return null
    }
  })
  .unless({path: ['/api/login', '/', '/favicon.ico']})
);

// serves all static files in /public
app.use(express.static(`${__dirname}/../public`))

const port = process.env.PORT || 8000
const server = require('http').Server(app)

// boilerplate version
const version = `Express-Boilerplate v${require('../package.json').version}`

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
// app.set('views', `/home/nicholas/Projects/AmFam/express-boilerplate/public/views`)

// start server
server.listen(port, () => {
  log.info(`${version}`)
  log.info(`==>  💻  Listening on Port ${port}  💻  <==`)
})

app.use('/', router)
