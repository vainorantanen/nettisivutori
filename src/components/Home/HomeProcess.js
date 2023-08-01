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
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          width: '40vw',
          '@media (max-width: 600px)': {
            width: '80vw',
          }
        }}>
          <Typography>1. Määrittele tarpeesi</Typography>
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
        textAlign: 'center'
      }}>
        <Box>
          <img src={laptopPic} alt='pic of mobile app' style={{ maxWidth: '40vw', height: 'auto' }}/>
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          width: '40vw',
          '@media (max-width: 600px)': {
            width: '80vw',
          }
        }}>
          <Typography>2. Kilpailuta toteutus</Typography>
          <Typography>Kilpailuttamalla nettisivujesi toteutuksen, tavoitat markkinoiden parhaat tekijät ja parhaat ideat.</Typography>
        </Box>


      </Box>

      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          width: '40vw',
          '@media (max-width: 600px)': {
            width: '80vw',
          }
        }}>
          <Typography>3. Valitse paras tekijä</Typography>
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