const config = require('./backend/utils/config')
const express = require('express')
const app = express()
const logger = require('./backend/utils/logger')
const mongoose = require('mongoose')
require('express-async-errors')
const path = require('path')

const coursesRouter = require('./backend/controllers/courses')
const usersRouter = require('./backend/controllers/users')
const loginRouter = require('./backend/controllers/login')
const feedPostsRouter = require('./backend/controllers/feedposts')

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

const middleware = require('./backend/utils/middleware')

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(express.static('build'))

app.use(express.json())

app.use('/api/courses', coursesRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/feedposts', feedPostsRouter)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.get('/version', (req, res) => {
  res.send('6, kokeillaan taas') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
