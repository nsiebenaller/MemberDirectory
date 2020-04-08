import express from 'express'
import db from '../models'
import { formMemberCSV } from '../helpers'

const router = express.Router()

router.route('/')
  .get(async(req, res, next) => {
    const allMembers = await db.Member.findAll({
      include: [{
        model: db.Tag,
        as: 'tags',
        through: { attributes: [] }
      }]
    });
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

router.route('/add_tag')
  .post((req, res, next) => {
    db.Member.findOne({where: {id: req.body.member_id}})
      .then((obj) => {
        db.Tag.findOne({where: {id: req.body.tag_id}})
          .then((tag) => {
            obj.addTags(tag).then(() => {
              res.status(200).send({success: true})
            })
          })
        })
      })

router.route('/remove_tag')
  .post(async(req, res, next) => {
    const member = await db.Member.findOne({
      where: { id: req.body.member_id },
      include: [{
        model: db.Tag,
        as: 'tags',
        through: { attributes: [] }
      }]
    });
    const tag = member.tags.filter(tag => tag.id === req.body.tag_id);
    const resp = await member.removeTags(tag);
    res.status(200).send({success: true});
  })

router.route('/delete')
.post(async(req, res, next) => {
  const member = await db.Member.findOne({
    where: { id: req.body.member_id },
    include: [{
      model: db.Tag,
      as: 'tags',
      through: { attributes: [] }
    }]
  });
  const promises = []
  member.tags.forEach((t) => promises.push(member.removeTags(t)))
  await Promise.all(promises)
  await member.destroy()
  res.status(200).send({success: true});
})

router.route('/export')
  .get(async (req, res, next) => {
    res.set('Content-Type', 'application/octet-stream')
    const members = await db.Member.findAll()
    const csv = formMemberCSV(members)
    res.send(csv)
  })

module.exports = router
