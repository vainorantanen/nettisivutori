import { Box } from '@mui/material'
import React from 'react'
import CoursesList from './CoursesList'

const Home = ({ courses }) => {
  return (
    <Box sx={{ marginTop: '3rem', minHeight: '100vh' }}>
      <CoursesList courses={courses}/>
    </Box>
  )
}

export default Home