import { Container } from '@mui/material'
import React from 'react'
import FeedHeader from './FeedHeader'
import FeedItems from './FeedItems'
import AddFeedPostForm from './AddFeedPostForm'
import { useState, useEffect } from 'react'
import feedPostService from '../../services/feedposts'

const Feed = ({ user }) => {
  const [ feedPosts, setFeedPosts ] = useState([])

  useEffect(() => {
    feedPostService.getAll().then(posts =>
      setFeedPosts( posts )
    )
  }, [])

  return (
    <Container sx={{ marginTop: '8rem', minHeight: '100vh' }}>
      <FeedHeader />
      {user && (
        <AddFeedPostForm feedPosts={feedPosts} setFeedPosts={setFeedPosts} />
      )}
      <FeedItems feedPosts={feedPosts} />
    </Container>
  )
}

export default Feed