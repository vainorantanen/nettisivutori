import React from 'react'
import { Typography, Box } from '@mui/material'

const FeedPostCard = ({ post }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: '2rem',
        border: '1px solid black',
        borderRadius: '1rem',
        marginLeft: '8rem',
        marginRight: '8rem',
        display: 'flex',
        flexDirection: 'column',
        '@media (max-width: 820px)': {
          marginLeft: '0.1rem',
          marginRight: '0.1rem',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          marginBottom: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <img
          src={`${post.user.imageurl}`}
          alt='Company logo'
          style={{
            border: '1px solid black',
            borderRadius: '1rem',
            width: '5rem',
            height: 'auto',
            marginRight: '1rem',
          }}
        />
        <div>
          <Typography>{post.user.name}</Typography>
          {post.timeStamp ? (
            <Typography>Published {post.timeStamp.split('T')[0]}</Typography>
          ) : <Typography>Published over a year ago</Typography>}
        </div>
      </Box>
      <Typography style={{ whiteSpace: 'break-spaces' }}>{post.description}</Typography>
    </Box>
  )
}

export default FeedPostCard
