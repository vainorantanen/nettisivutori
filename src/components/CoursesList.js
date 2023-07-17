import React from 'react'
import Course from './Course'
import { useState } from 'react'
import Filter from './FilterCourses'
import { Container, Typography, Box } from '@mui/material'


const CoursesList = ({ courses }) => {
  const [filter, setFilter] = useState('')

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const coursesToShow = filter === '' ? courses : courses.filter(
    (c) => c.title.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <Container sx={{ marginTop: '8rem' }}>
      <Typography
        sx={{
          fontSize: '2.5rem',
          textAlign: 'center',
          '@media (max-width: 442px)': {
            fontSize: '1.5rem',
          },
        }}
      >Courses</Typography>

      <Typography
        sx={{
          fontSize: '1.6rem',
          textAlign: 'center',
          marginTop: '3rem',
          '@media (max-width: 442px)': {
            fontSize: '1.1rem',
          },
        }}
      >Find the micro degrees that best suit your needs and get hired fast</Typography>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '1rem',
        marginBottom: '1rem',
        borderRadius: '1rem'
      }}>
        {coursesToShow.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </Box>
    </Container>
  )
}


export default CoursesList