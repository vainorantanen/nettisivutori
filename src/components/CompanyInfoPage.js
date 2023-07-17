import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CompanyInfoPage = ({ users }) => {
  const id = useParams().id
  const company = users.find((c) => c.id === id)

  if (!company) {
    return null
  }
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem',
        minHeight: '100vh',
      }}
    >
      <Typography
        sx={{
          fontSize: '2.5rem',
          textAlign: 'center',
          '@media (max-width: 442px)': {
            fontSize: '1.5rem',
          },
        }}
      >
        {company.name}
      </Typography>
      <Box sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <img
          src={`${company.imageurl}`}
          alt="company logo"
          style={{ border: '1px solid black', borderRadius: '1rem', margin: '1rem',
            width: '20rem', height: 'auto' }}
        ></img>
      </Box>
      <Box>
        <Typography sx={{ marginBottom: '2rem' }}>Tietoa yrityksestä</Typography>
        <Typography>{company.description}</Typography>
      </Box>
    </Container>
  )
}

export default CompanyInfoPage
