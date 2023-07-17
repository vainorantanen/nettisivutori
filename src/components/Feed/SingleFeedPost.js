import { Typography, Box, Button, Container } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import FeedBidCard from './FeedBidCard'

const SingleFeedPost = ({ feedPosts, user }) => {

  const id = useParams().id
  const post = feedPosts.find((c) => c.id === id)

  if (!post) {
    return null
  }

  return (
    <Container  sx={{ marginTop: '7rem', minHeight: '100vh' }}>
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
              <Typography>Julkaistu {post.timeStamp.split('T')[0]}</Typography>
            ) : <Typography>Julkaistu yli vuosi sitten</Typography>}
          </div>
        </Box>
        <Typography style={{ whiteSpace: 'break-spaces' }}>{post.description}</Typography>
        {user && user.isCompany === true && (
          <Button>
          Tee tarjous
          </Button>
        )}
      </Box>
      <Typography>Tarjoukset</Typography>
      {post.feedBids.length > 0 ? (
        post.feedBids.map((bid) => (
          <FeedBidCard key={bid.id} bid={bid}/>
        ))
      ): (
        <Typography>Ei vielä tarjouksia!</Typography>
      )}
    </Container>
  )
}

export default SingleFeedPost