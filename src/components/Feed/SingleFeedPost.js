import { Typography, Box, Container, TextField, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FeedBidCard from './FeedBidCard'
import Togglable from '../Togglable'
import MakeBidForm from './MakeBidForm'
import feedPostService from '../../services/feedposts'

const SingleFeedPost = ({ feedPosts, user }) => {
  const id = useParams().id
  const [ post, setPost ] = useState(feedPosts.find((c) => c.id === id))
  const [ description, setDescription ] = useState('')

  useEffect(() => {
    if (post) {
      setDescription(post.description)
    }
  }, [])

  const handleSubmit = async () => {
    // Handle submit logic here
    await feedPostService.update({ ...post, description: description })

    // You can access the description value using the 'description' state variable
    console.log('Submit clicked')
  }

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
          <div>
            <Typography>{post.user.name}</Typography>
            {post.timeStamp ? (
              <Typography>Julkaistu {post.timeStamp.split('T')[0]}</Typography>
            ) : <Typography>Julkaistu yli vuosi sitten</Typography>}
          </div>
        </Box>
        <Typography style={{ whiteSpace: 'break-spaces' }}>{post.description}</Typography>
      </Box>
      {user && user.isCompany === true && (
        <Togglable buttonLabel='Tee tarjous'>
          <MakeBidForm post={post} setPost={setPost}/>
        </Togglable>
      )}
      <Typography>Tarjoukset</Typography>
      {post.feedBids.length > 0 ? (
        post.feedBids.map((bid) => (
          <FeedBidCard key={bid.id} bid={bid}/>
        ))
      ): (
        <Typography>Ei vielä tarjouksia!</Typography>
      )}
      {user && user.name === post.user.name && (
        <Box>
          <Typography>Muokkaa ilmoituksen sisältöä</Typography>
          <TextField
            id="description"
            label="Minkälaista nettisivua etsit?"
            multiline
            rows={8}
            value={description}
            onChange={({ target }) => setDescription(target.value)}
            sx={{ marginBottom: '1rem' }}
          />
          <Button variant="contained" onClick={handleSubmit}>
              Submit
          </Button>
        </Box>
      )}
    </Container>
  )
}

export default SingleFeedPost