import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box } from '@mui/material'

const Company = ({ company }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
        textAlign: 'center',
        '&:hover': {
          transform: 'scale(1.05)' },
        padding: '2rem',
        boxShadow: '0.3rem 0.3rem 0.3rem',
        maxWidth: '12rem',
        borderRadius: '1rem',
        marginBottom: '1rem',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <img
        src={`${company.imageurl}`}
        alt='Company logo'
        style={{
          border: '1px solid black',
          borderRadius: '1rem',
          width: '8rem',
          height: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      <Box>
        <Typography component={Link} to={`/companies/${company.id}`}>{company.name}
        </Typography>
      </Box>
    </Box>
  )
}

export default Company
