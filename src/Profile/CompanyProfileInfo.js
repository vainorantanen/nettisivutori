import { Container, Typography } from '@mui/material'
import React from 'react'

const CompanyProfileInfo = ({ user }) => {
  console.log('käyttäjä: ', user)
  return (
    <Container>
      <Typography>Käyttäjänimi: {user.username}</Typography>
      <Typography>Toimijanimi: {user.name}</Typography>
      <Typography>Selite: {user.description}</Typography>
    </Container>
  )
}

export default CompanyProfileInfo