import React from 'react'
import { Container, Typography } from '@mui/material'

const PrivateProfile = ({ user }) => {
  return (
    <Container sx={{ marginTop: '7rem', minHeight: '100vh' }}>
      <Typography>Käyttäjän {user.name} Profiili</Typography>
    </Container>
  )
}

export default PrivateProfile