import express from 'express'
import jwt from 'jsonwebtoken'
import membersRouter from './members'
import tagsRouter from './tags'
import db from '../models'


const router = express.Router()

router.route('/')
  .get((req, res, next) => {
    return res.send(`I am the API`);
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

    const token = jwt.sign({
      username: prospect.username,
      id: prospect.id
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
    res.cookie('frcctoken',token,cookieOptions)

    return res.status(200).send(verifiedUser)
  })


router.use('/members', membersRouter)
router.use('/tags', tagsRouter)
module.exports = router
