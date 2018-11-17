import express from 'express'
import path from 'path'

const router = express.Router()

router.route('/')
  .get((req, res, next) => {
      return res.send(`I am the index`);
  })


module.exports = router
