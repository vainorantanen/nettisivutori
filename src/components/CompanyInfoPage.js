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
        marginTop: '5rem',
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
      <Typography variant="h6">Micro degrees by {company.name}</Typography>
      {company.courses.length === 0 && <Typography>No micro degrees yet!</Typography>}
      {company.courses.length > 0 && (
        <ul>
          {company.courses.map((c) => (
            <li key={c.id}>
              <Typography component={Link} to={`/courses/${c.id}`}>{c.title}</Typography>
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}

export default CompanyInfoPage
