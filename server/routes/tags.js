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


module.exports = router
