const router = require('express').Router()
const Course = require('../models/course')

const { userExtractor } = require('../utils/middleware')

router.get('/', async (request, response) => {
  const courses = await Course
    .find({})

  response.json(courses)
})

router.post('/', userExtractor, async (request, response) => {
  //console.log("RBODY", request.body)
  const { title, company, url, likes, description } = request.body
  //console.log("aINFO", additionalinfo)
  const course = new Course({
    title, company, url,
    likes: likes ? likes : 0,
    description : description
  })

  const user = request.user

  if (!user) {
    return response.status(401).json({ error: 'operation not permitted' })
  }

  course.user = user._id

  let createdCourse = await course.save()

  user.courses = user.courses.concat(createdCourse._id)
  await user.save()

  createdCourse = await Course.findById(createdCourse._id).populate('user')

  response.status(201).json(createdCourse)
})

router.put('/:id', async (request, response) => {
  const { title, url, company, likes, description } = request.body

  let updatedCourse = await Course.findByIdAndUpdate(request.params.id,  { title, url, company, likes, description }, { new: true })

  updatedCourse = await Course.findById(updatedCourse._id).populate('user')

  response.json(updatedCourse)
})
/*
router.delete('/:id', userExtractor, async (request, response) => {
  const blog = await Blog.findById(request.params.id)

  const user = request.user

  if (!user || blog.user.toString() !== user.id.toString()) {
    return response.status(401).json({ error: 'operation not permitted' })
  }

  user.blogs = user.blogs.filter(b => b.toString() !== blog.id.toString() )

  await user.save()
  await blog.remove()

  response.status(204).end()
})
*/
module.exports = router