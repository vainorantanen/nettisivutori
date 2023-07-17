import React from 'react'
import Company from './Company'
import { Box, Container, Typography } from '@mui/material'

const CompaniesList = ({ users }) => {
  return (
    <Container sx={{ marginTop: '8rem' }}>
      <Typography
        sx={{
          fontSize: '2.5rem',
          textAlign: 'center',
          '@media (max-width: 442px)': {
            fontSize: '1.4rem',
          },
        }}
      >
          Companies
      </Typography>

      <Typography
        sx={{
          fontSize: '1.6rem',
          textAlign: 'center',
          marginTop: '3rem',
          marginBottom: '3rem',
          '@media (max-width: 442px)': {
            fontSize: '1.1rem',
          },
        }}
      >Companies that provide micro degrees</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          gap: '1rem',
          marginBottom: '1rem',
          borderRadius: '1rem'
        }}
      >
        {users.map((u) => (
          <Company key={u.id} company={u} />
        ))}
      </Box>
    </Container>
  )
}

export default CompaniesList
