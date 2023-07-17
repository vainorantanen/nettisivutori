import { Container, Typography } from '@mui/material'
import React from 'react'

const Profile = ({ user }) => {

  if (!user) {
    return null
  }

  if (user.isCompany === true) {
    return (
      <Container sx={{ marginTop: '7rem', minHeight: '100vh' }}>
        <Typography>Firman Profiili</Typography>
      </Container>
    )
  }

  return (
    <Container sx={{ marginTop: '7rem', minHeight: '100vh' }}>
      <Typography>Yksityinen Profiili</Typography>
    </Container>
  )
}

export default Profile