import React from 'react'
import { Box, Container } from '@mui/material'
import FeedPostCard from './FeedPostCard'

const FeedItems = ({ feedPosts }) => {
  return (
    <Container sx={{ marginTop: '4rem' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          //textAlign: 'center',
          gap: '1rem',
          marginBottom: '1rem',
          borderRadius: '1rem'
        }}
      >
        {feedPosts.map((post) => (
          <FeedPostCard key={post.id} post={post} />
        ))}
      </Box>
    </Container>
  )
}

export default FeedItems