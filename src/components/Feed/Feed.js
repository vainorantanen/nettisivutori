import { Container } from '@mui/material'
import React from 'react'
import FeedHeader from './FeedHeader'
import FeedItems from './FeedItems'

const Feed = ({ feedPosts }) => {

  return (
    <Container sx={{ marginTop: '8rem', minHeight: '100vh' }}>
      <FeedHeader />
      <FeedItems feedPosts={feedPosts} />
    </Container>
  )
}

export default Feed