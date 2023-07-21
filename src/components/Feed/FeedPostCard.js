import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

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
        <div>
          <Typography>{post.user.name}</Typography>
          {post.timeStamp ? (
            <Typography>Julkaistu {post.timeStamp.split('T')[0]}</Typography>
          ) : <Typography>Julkaistu yli vuosi sitten</Typography>}
        </div>
      </Box>
      <Typography style={{ whiteSpace: 'break-spaces' }}>{post.description}</Typography>
      <Button component={Link} to={`/tarjouskilpailut/${post.id}`}>
            Tarkastele
      </Button>
    </Box>
  )
}

export default FeedPostCard
