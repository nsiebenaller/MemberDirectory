'use strict'
require('babel-polyfill')
// env
require('dotenv').config()
const {IS_DEV} = process.env

// dependencies
const Promise = require('bluebird')
const log = require('./logger.js')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const expressJWT = require('express-jwt')
const jsonwebtoken = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

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

app.use(express.json())
app.use(require('helmet')()) // use helmet
app.use(require('cors')()) // enable CORS
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(express.static(`${__dirname}/../public`))
var opts = {
	extensions: ["js"],
	setHeaders: function(res, path, stat) {
		res.set("Content-type", "text/javascript")
	}
}
app.use(express.static(`${__dirname}/../public`, opts))


// PROTECTED PATHS
const checkToken = {
  secret: 'secret',
  getToken: (req) => {
		const token = req.cookies.frcctoken
		if(!token) {
			return null
		}
		else {
			try {
				const verified = jsonwebtoken.verify(token, 'secret')
				if(verified.revoked) return null
			}
			catch(e) {
				return null
			}
		}
    return token
  }
}

app.use(['/api/ping', '/api/tags', '/api/tags/*', '/api/members/*', '/api/members'], expressJWT(checkToken))

//Redirect all to root
const router = require('./routes/index')
app.use('/', router)
app.use('/', (req, res) => res.redirect('/'))

const port = process.env.PORT || 8000
const server = require('http').Server(app)

const version = `Member Directory v${require('../package.json').version}`
// start server
server.listen(port, () => {
  log.info(`IS RUNNING IN DEV:: ${IS_DEV}`)
  log.info(`${version}`)
  log.info(`==>  💻  API Listening on Port ${port}  💻  <==`)
})
