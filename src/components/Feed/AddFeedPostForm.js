import React from 'react'
import { useState } from 'react'
import {
  TextField,
  Button,
  Typography,
  Container,
  Box
} from '@mui/material'

import feedPostService from '../../services/feedposts'

const AddFeedPostForm = ({ user, feedPosts, setFeedPosts }) => {
  const [description, setDescription] = useState('')

  const addFeedPost = async (newPost) => {
    const addedPost = await feedPostService.create(newPost)
    //notifyWith(`A new course '${newCourse.title}' by '${newCourse.company}' added`)
    setFeedPosts(feedPosts.concat(addedPost))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('handlesubmit', description)
    await addFeedPost({ description, timeStamp : new Date(), isOpen: true })
    setDescription('')
  }

  if (!user) {
    return (
      <Container sx={{ marginTop: '5rem', minHeight: '100vh' }}>
        <Typography
          sx={{
            fontSize: '1.3rem',
            textAlign: 'center',
            marginTop: '2rem',
            '@media (max-width: 442px)': {
              fontSize: '1rem',
            },
          }}
        >
            Kirjaudu sisään lisätäksesi ilmoitus
        </Typography>
      </Container>
    )
  }

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh'
    }}>
      <Typography
        sx={{
          fontSize: '1.3rem',
          textAlign: 'center',
          marginTop: '2rem',
          '@media (max-width: 442px)': {
            fontSize: '1rem',
          },
        }}
      >
          Lisää ilmoitus
      </Typography>

      <Box component="form" onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '2rem',
          marginBottom: '2rem',
          width: '100%',
          maxWidth: '30rem',
        }}
      >
        <TextField
          id="description"
          label="Minkälaista nettisivua etsit?"
          //placeholder="Course description"
          multiline
          rows={8}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          sx={{ marginBottom: '1rem' }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ backgroundColor: 'blue', color: 'white',
            transition: 'transform 0.3s',
            marginTop: '1rem',
            marginBottom: '1rem',
            '&:hover': {
              transform: 'scale(1.05)',
              backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)' }
          }}
        >
          Julkaise
        </Button>
      </Box>
    </Container>
  )
}

export default AddFeedPostForm