import React from 'react'
import { Container, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import CompanyProfileInfo from './CompanyProfileInfo'

const CompanyProfile = ({ user }) => {
  return (
    <Container sx={{ marginTop: '7rem', minHeight: '100vh' }}>
      <Typography>Toimijan {user.name} Profiili</Typography>
      <Typography>Muokkaa profiilin tietoja</Typography>
      <CompanyProfileInfo user={user} />
      <Typography>Seuraa tekemiesi tarjousten tilannetta</Typography>
    </Container>
  )
}

export default CompanyProfile