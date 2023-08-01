import React from 'react'
import { Box, Typography } from '@mui/material'
import devicesPic from '../../Assets/devices.png'
import laptopPic from '../../Assets/laptop.png'

const HomeProcess = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      gap: '6rem'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'flex-start',
        gap: '1rem'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          width: '40vw',
          backgroundColor: 'white',
          borderRadius: '1rem',
          padding: '1rem',
          '@media (max-width: 600px)': {
            width: '80vw',
          }
        }}>
          <Typography sx={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>1. <span style={{ color: 'blue' }}>Määrittele</span>  tarpeesi</Typography>
          <Typography>Kerro millaiset nettisivut haluat ja mitä ominiasuuksia nettisivujen tulisi sisältää. Määrittely antaa raamit nettisivuejesi toeuttajalle niiden lajudesta sekä mahdollistaa arvion työmäärästä ja hinnasta</Typography>
        </Box>
        <Box>
          <img src={devicesPic} alt='pic of mobile app' style={{ maxWidth: '40vw', height: 'auto' }}/>
        </Box>

      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'flex-start',
        gap: '1rem'
      }}>
        <Box>
          <img src={laptopPic} alt='pic of mobile app' style={{ maxWidth: '40vw', height: 'auto' }}/>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '40vw',
          backgroundColor: 'white',
          borderRadius: '1rem',
          padding: '1rem',
          '@media (max-width: 600px)': {
            width: '80vw',
          }
        }}>
          <Typography sx={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>2. <span style={{ color: 'blue' }}>Lisää</span> ilmoitus</Typography>
          <Typography>Lisäämällä ilmoituksen tarpeidesi mukaan, tavoitat markkinoiden parhaat tekijät ja parhaat ideat.</Typography>
        </Box>


      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'flex-start',
        gap: '1rem',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          width: '40vw',
          backgroundColor: 'white',
          borderRadius: '1rem',
          padding: '1rem',
          '@media (max-width: 600px)': {
            width: '80vw',
          }
        }}>
          <Typography sx={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>3. <span style={{ color: 'blue' }}>Valitse</span> paras tekijä</Typography>
          <Typography>Kun tarjouskilpailu on päättynyt voi valita tarjouksista itsellesi parhaiten sopivan tekijän, ja siten varmistat etttä saat juuri itsellesi parhaat mahdolliset sivut.</Typography>
        </Box>
        <Box>
          <img src={devicesPic} alt='pic of mobile app' style={{ maxWidth: '40vw', height: 'auto' }}/>
        </Box>

      </Box>
    </Box>
  )
}

export default HomeProcess