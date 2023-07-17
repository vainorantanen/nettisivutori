import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Button, Typography, Box } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

const CourseInfoPage = ({ courses, like }) => {

  const id = useParams().id
  const course = courses.find(c => c.id === id)
  if (!course) {
    return null
  }
  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '5rem',
      minHeight: '100vh',
    }}>
      <Typography sx={{
        fontSize: '2.5rem',
        textAlign: 'center',
        '@media (max-width: 442px)': {
          fontSize: '1.5rem',
        },
      }}>{course.title}</Typography>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <Typography sx={{
          fontSize: '1.5rem',
          textAlign: 'center',
          '@media (max-width: 442px)': {
            fontSize: '1.2rem',
          },
        }}>By {course.company}</Typography>
        <img
          src={`${course.user.imageurl}`}
          alt="Image of company logo"
          style={{
            border: '1px solid black',
            borderRadius: '1rem',
            marginLeft: '1rem',
            height: 'auto',
            width: '4rem',
          }}
        ></img>
      </Box>
      <Typography sx={{
        fontSize: '2rem',
        textAlign: 'center',
        '@media (max-width: 442px)': {
          fontSize: '1.5rem',
        },
      }}>Course description</Typography>
      {!course.description && (
        <Typography>
      Its a mystery!
        </Typography>
      )}
      {course.description && (
        <Typography style={{ whiteSpace: 'break-spaces' }}>
          {course.description}
        </Typography>
      )}
      <Typography sx={{
        fontSize: '1.3rem',
        textAlign: 'center',
        marginTop: '2rem',
        marginBottom: '2rem',
        '@media (max-width: 442px)': {
          fontSize: '1rem',
        },
      }}>
    Apply here: <a href="#">{course.url}</a>
      </Typography>
      <Typography>
    Have you completed this course? Did you like it? Let us know!
      </Typography>
      <Button
        sx={{ backgroundColor: 'blue', color: 'white',
          transition: 'transform 0.3s',
          marginTop: '1rem',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)' },
        }}
        onClick={() => like(course)}>Like <ThumbUpIcon sx={{ marginLeft: '0.5rem' }}></ThumbUpIcon></Button>
      <Typography sx={{
        marginTop: '1rem'
      }}>Likes: {course.likes}</Typography>
    </Container>

  )
}

export default CourseInfoPage