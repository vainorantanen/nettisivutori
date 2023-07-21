import React from 'react'
import { Container, Typography } from '@mui/material'
import CompanyProfileInfo from './CompanyProfileInfo'

const CompanyProfile = ({ user, setUser }) => {
  return (
    <Container sx={{ marginTop: '7rem', minHeight: '100vh', backgroundColor: 'white', borderRadius: '1rem' }}>
      <Typography>Toimijan {user.name} Profiili</Typography>
      <CompanyProfileInfo user={user} setUser={setUser}/>
      <Typography>Seuraa tekemiesi tarjousten tilannetta</Typography>
    </Container>
  )
}

export default CompanyProfile