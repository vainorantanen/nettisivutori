import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeader = () => {
  return (
    <Box sx={{ marginTop: '6rem' }}>
      <Typography
        sx={{
          fontSize: '2.5rem',
          textAlign: 'center',
          '@media (max-width: 442px)': {
            fontSize: '1.5rem',
          },
        }}
      >Tervetuoloa Nettisivutoriin!</Typography>

      <Typography
        sx={{
          fontSize: '1.7rem',
          textAlign: 'center',
          '@media (max-width: 442px)': {
            fontSize: '1rem',
          },
        }}
      >Helpoin tapa kilpailuttaa omien nettisivujen teko. Täysin ilmaiseksi.</Typography>
      <Typography
        sx={{
          fontSize: '1.5rem',
          textAlign: 'center',
          '@media (max-width: 442px)': {
            fontSize: '1rem',
          },
        }}
      >Lupaamme sinulle tarjouksen 24 tunnin sisällä ilmoituksen jättämisestä!</Typography>
      <Button
        component={Link}
        to="/tarjouskilpailut"
        sx={{
          backgroundColor: 'blue',
          color: 'white',
          transition: 'transform 0.3s',
          marginTop: '1rem',
          marginBottom: '1rem',
          marginLeft: '1rem',
          borderRadius: '1rem',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)',
          },
        }}
      >
  Avoimet tarjouskilpailut
      </Button>
      <Button
        component={Link}
        to="/lisaailmoitus"
        sx={{ backgroundColor: 'blue', color: 'white',
          transition: 'transform 0.3s',
          marginTop: '1rem',
          marginLeft: '1rem',
          marginBottom: '1rem',
          borderRadius: '1rem',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)' }
        }}>
            Aloita tarjouskilpailu
      </Button>
    </Box>
  )
}

export default HomeHeader