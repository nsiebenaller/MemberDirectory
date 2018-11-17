import express from 'express'
import db from '../models'

const router = express.Router()

router.route('/')
  .get(async(req, res, next) => {
    const allMembers = await db.Member.findAll()
    res.status(200).send(allMembers)
  })

module.exports = router
