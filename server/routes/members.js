import express from 'express'
import fs from 'fs'
import db from '../models'
import { formMemberCSV } from '../helpers'
import puppeteer from 'puppeteer'

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


const startHTML = `
<html>
    <head>
        <style>
          @media print {
            body {
                display: flex;
                flex-wrap: wrap;
            }
            .item {
                width: 40%;
                height: 50px;
                padding-top: 42px;
                padding-left: 30px;
                padding-right: 30px;
                padding-bottom: 50px;
            }
          }
        </style>
    </head>
    <body>`

const endHTML = `</body></html>`

function getItem(member) {
  return(`
    <div class="item">
      <div>${member.first_name} ${member.last_name}</div>
      <div>${member.address}</div>
      <div>${member.city}, ${member.state} ${member.zip}</div>
      <div>${member.email || ""}</div>
      <div>${member.phone || ""}</div>
    </div>
  `)
}

router.route("/export_pdf")
  .get(async(req, res, next) => {
    // Get All Members
    const allMembers = await db.Member.findAll({
      include: [{
        model: db.Tag,
        as: 'tags',
        through: { attributes: [] }
      }]
    })

    // Form HTML    
    let html = startHTML
    allMembers.forEach((member) => html += getItem(member))
    html += endHTML

    //TODO: maybe use pdfmerger 

    const filePath = "export.pdf"
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setContent(html)


    await page.pdf({path: filePath, format: 'A4'});
    await browser.close();

    res.writeHead(200, {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": "attachment; filename=" + filePath
    })
    fs.createReadStream(filePath).pipe(res)
  })



module.exports = router
