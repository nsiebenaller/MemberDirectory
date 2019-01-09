import express from 'express'
import db from '../models'

const router = express.Router()

router.route('/')
  .get(async(req, res, next) => {
    const allMembers = await db.Member.findAll()
    res.status(200).send(allMembers)
  })

router.route('/new')
  .post((req, res, next) => {
    console.log(req.body)
    res.status(200).send("check!")
  })

module.exports = router
