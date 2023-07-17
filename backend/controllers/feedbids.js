const router = require('express').Router()
const FeedBid = require('../models/feedbid')

const { userExtractor } = require('../utils/middleware')

router.get('/', async (request, response) => {
  const feedBids = await FeedBid
    .find({})
    .populate('user', { name: 1, imageurl: 1 })

  response.json(feedBids)
})

router.post('/', userExtractor, async (request, response) => {
  //console.log("RBODY", request.body)
  const { description, timeStamp, isApproved } = request.body
  //console.log("aINFO", additionalinfo)
  const feedBid = new FeedBid({
    description,
    timeStamp,
    isApproved
  })

  const user = request.user

  if (!user || user.isCompany === false) {
    return response.status(401).json({ error: 'operation not permitted' })
  }

  feedBid.user = user._id

  let createdFeedBid = await feedBid.save()

  user.feedBids = user.feedBids.concat(createdFeedBid._id)
  await user.save()

  createdFeedBid = await FeedBid.findById(createdFeedBid._id).populate('user')

  response.status(201).json(createdFeedBid)
})

router.put('/:id', async (request, response) => {
  const { likes, description } = request.body

  let updatedFeedBid = await FeedBid.findByIdAndUpdate(request.params.id,  { likes, description }, { new: true })

  updatedFeedBid = await FeedBid.findById(updatedFeedBid._id).populate('user')

  response.json(updatedFeedBid)
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