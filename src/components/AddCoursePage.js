import React from 'react'
import { useState } from 'react'
import {
  TextField,
  Button,
  Typography,
  Container,
  Box
} from '@mui/material'


const AddCoursePage = ({ addCourse }) => {
  const [title, setTitle] = useState('')
  const [company, setCompany] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('handlesubmit', description)
    await addCourse({ title, company, url, description })
    setCompany('')
    setDescription('')
    setTitle('')
    setUrl('')
  }

  return (
    <Container sx={{ marginTop: '5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    }}>
      <Typography
        sx={{
          fontSize: '3rem',
          textAlign: 'center',
          '@media (max-width: 442px)': {
            fontSize: '1.5rem',
          },
        }}
      >
          Add a new course!
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
          id="title"
          label="Course title"
          placeholder="title"
          value={title}
          required
          onChange={({ target }) => setTitle(target.value)}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          id="company"
          label="Company name"
          placeholder="company"
          value={company}
          required
          onChange={({ target }) => setCompany(target.value)}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          id="url"
          label="URL to course page"
          placeholder="url"
          required
          value={url}
          onChange={({ target }) => setUrl(target.value)}
          sx={{ marginBottom: '1rem' }}
        />
        <TextField
          id="additionalinfo"
          label="Course description"
          placeholder="Course description"
          multiline
          rows={4}
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
          Add!
        </Button>
      </Box>
    </Container>
  )
}

export default AddCoursePage
