import { Container, Typography, Box, TextField, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import userService from '../services/users'

const CompanyProfileInfo = ({ user }) => {
  const [description, setDescription] = useState(user.description)
  console.log('käyttäjä: ', user)

  const handleSubmit = async () => {
    console.log('up: ', { ...user, description: description })
    await userService.update({ ...user, description: description })
  }


  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', marginTop: '1rem',
      justifyContent: 'center', textAlign: 'center', alignItems: 'center'
    }}>
      <Typography>Käyttäjänimi: {user.username}</Typography>
      <Typography>Toimijanimi: {user.name}</Typography>
      <Typography>Selite: {user.description}</Typography>
      <Typography>Muokkaa selitettä</Typography>
      <TextField
        id="description"
        label="Kerro itsestäsi jotain..."
        multiline
        rows={8}
        value={description}
        onChange={({ target }) => setDescription(target.value)}
        sx={{ marginBottom: '1rem', width: '30rem' }}
      />
      <Button onClick={handleSubmit}>
          Päivitä
      </Button>
    </Container>
  )
}

export default CompanyProfileInfo