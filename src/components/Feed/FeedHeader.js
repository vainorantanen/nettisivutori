import { Container, Typography } from '@mui/material'
import React from 'react'

const FeedHeader = () => {
  return (
    <Container>
      <Typography
        sx={{
          fontSize: '2.5rem',
          textAlign: 'center',
          '@media (max-width: 442px)': {
            fontSize: '1.5rem',
          },
        }}
      >Feed</Typography>

      <Typography
        sx={{
          fontSize: '1.7rem',
          textAlign: 'center',
          '@media (max-width: 442px)': {
            fontSize: '1rem',
          },
        }}
      >See the latest news and posts by the companies!</Typography>
    </Container>
  )
}

export default FeedHeader