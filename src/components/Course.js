import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'


const Course = ({ course }) => {
  var imagesource = course.user.imageurl
  if (course.user.imageurl === undefined) {
    imagesource =
      'https://www.logodesign.net/logo/tower-crane-with-buildings-under-construction-1312ld.png'
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
        '&:hover': {
          transform: 'scale(1.05)' },
        padding: '2rem',
        boxShadow: '0.3rem 0.3rem 0.3rem',
        width: '15rem',
        borderRadius: '1rem',
        margin: '1rem'
      }}
    >
      <Typography component={Link} to={`/courses/${course.id}`}
        sx={{ textDecoration: 'none', }}
      >{course.title}</Typography>
      <Typography>By {course.company}</Typography>
      <img
        src={`${imagesource}`}
        alt='course logo'
        style={{
          border: '1px solid black',
          borderRadius: '1rem',
          width: '8rem',
          height: 'auto',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      <Typography>Likes {course.likes}</Typography>
      <Button sx={{ backgroundColor: 'blue', color: 'white',
        transition: 'transform 0.3s',
        marginTop: '1rem',
        '&:hover': {
          transform: 'scale(1.05)',
          backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)' },
      }}
      component={Link}
      to={`/courses/${course.id}`}

      >Show!</Button>
    </Box>
  )
}

export default Course
