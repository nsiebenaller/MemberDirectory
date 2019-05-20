import express from 'express'
import db from '../models'

const router = express.Router()


router.route('/new')
  .post((req, res, next) => {
    db.Tag.create(req.body)
      .then((x) => {
        res.status(200).send({success: true})
      })

  })

router.route('/')
  .get(async(req, res, next) => {
    const allTags = await db.Tag.findAll()
    res.status(200).send(allTags)
  })


module.exports = router
