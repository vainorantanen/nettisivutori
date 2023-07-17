const bcrypt = require('bcrypt')
const router = require('express').Router()
const User = require('../models/user')

router.post('/', async (request, response) => {
  const { username, name, password, imageurl, description,
    isCompany } = request.body

  if ( !password || password.length < 3) {
    return response.status(400).json({
      error: '`password` is shorter than the minimum allowed length (3)'
    })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    passwordHash,
    imageurl,
    description,
    isCompany
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

router.get('/', async (request, response) => {
  const users = await User.find({})
    .populate('courses', { title: 1, company: 1, url: 1, likes: 1 })
    .populate('feedPosts', { description: 1, likes: 1, timeStamp: 1 })

  response.json(users)
})

module.exports = router