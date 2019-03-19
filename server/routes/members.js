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
    db.Member.create(req.body)
      .then((x) => {
        res.status(200).send({success: true})
      })

  })

router.route('/update')
.post((req, res, next) => {
  db.Member.findOne({where: {id: req.body.id}})
    .then((obj) => {
      obj.update(req.body)
        .then((resp) => {
          res.status(200).send({success: true})
        })
        .catch((err) => {
          res.status(500).send({success: false})
        })

    })

})

module.exports = router
