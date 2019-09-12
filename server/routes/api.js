import express from 'express'
import jsonwebtoken from 'jsonwebtoken'
import membersRouter from './members'
import tagsRouter from './tags'
import db from '../models'


const router = express.Router()

router.route('/')
  .get((req, res, next) => {
    return res.send(`OK`);
  })

router.route('/ping')
  .get((req, res, next) => {
    const token = req.cookies.frcctoken
    const verified = jsonwebtoken.verify(token, 'secret')
    return res.status(200).send({ username: verified.username, id: verified.id })
  })

router.route('/login')
  .get(async (req, res, next) => {
    const {
      username,
      password
    } = req.headers
    if(!username || !password) return res.status(401).send("Unauthorized Access")
    const prospect = await db.User.findOne({where:{username: username, password: password}})
    if(!prospect) return res.status(401).send("Unauthorized Access")

    const token = jsonwebtoken.sign({
      username: prospect.username,
      id: prospect.id,
      revoked: false
    },
    'secret',
    {
      expiresIn: '24h'
    })
    const verifiedUser = {
      id: prospect.id,
      username: prospect.username,
    }

    const cookieOptions = {
      httpOnly: true,
      expires: 0
     }
    res.cookie('frcctoken', token, cookieOptions)

    return res.status(200).send(verifiedUser)
  })

router.route('/logout')
  .get((req, res, next) => {
    const token = req.cookies.frcctoken
    try {
      const verified = jsonwebtoken.verify(token, 'secret')
      const newToken = jsonwebtoken.sign({
        username: verified.username,
        id: verified.id,
        revoked: true
      },
      'secret',
      {
        expiresIn: '1'
      })
      const cookieOptions = {
        httpOnly: true,
       }
      res.cookie('frcctoken', newToken, cookieOptions)
      return res.status(200).send("OK")
    }
    catch(e) {
      return res.status(200).send("OK")
    }
  })

router.route('/migrate')
  .get(async (req, res, next) => {
    // const allMembers = await db.Member.findAll()
    // allMembers.forEach((member) => {
    //   const birthday = {
    //     birth_day: null,
    //     birth_month: null,
    //     birth_fullyear: null
    //   }
    //   if(member.birth_date) {
    //     const dateStr = member.birth_date.split('/')
    //     birthday.birth_month = parseInt(dateStr[0])
    //     birthday.birth_day = parseInt(dateStr[1])
    //   }
    //   if(member.birth_year) {
    //     birthday.birth_fullyear = parseInt(member.birth_year)
    //   }
    //   member.update({ ...member, ...birthday })
    // })
    return res.status(200).send("OK")
  })

router.use('/members', membersRouter)
router.use('/tags', tagsRouter)
module.exports = router
