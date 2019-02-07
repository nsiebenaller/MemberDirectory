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
    db.Member.create(req.body)
      .then((x) => {
        res.status(200).send({success: true})
      })

  })

module.exports = router
