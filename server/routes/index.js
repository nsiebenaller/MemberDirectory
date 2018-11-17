import express from 'express'
import apiRouter from './api'
import baseRouter from './base'

const router = express.Router()

router.use('/', baseRouter)
router.use('/api', apiRouter)

module.exports = router
