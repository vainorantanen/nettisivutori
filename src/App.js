import React from 'react'
import { useState, useEffect, useRef } from 'react'

import courseService from './services/courses'
import loginService from './services/login'
import usersService from './services/users'

import Notification from './components/Notification'
import storageService from './services/storage'
import LoginForm from './components/LoginForm'
import AddCoursePage from './components/AddCoursePage'
import CourseInfoPage from './components/CourseInfoPage'
import CompaniesList from './components/CompaniesList'
import CompanyInfoPage from './components/CompanyInfoPage'

import {
  Routes, Route
} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'

import './App.css'
import { Box } from '@mui/material'

import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import Home from './components/Home'
import Feed from './components/Feed/Feed'

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
})

const App = () => {
  const [courses, setCourses] = useState([])
  const [user, setUser] = useState('')
  const [info, setInfo] = useState({ message: null })
  const [users, setUsers] = useState([])

  const registerFormRef = useRef()

  useEffect(() => {
    const user = storageService.loadUser()
    setUser(user)
  }, [])

  useEffect(() => {
    courseService.getAll().then(courses =>
      setCourses( courses )
    )
  }, [])

  useEffect(() => {
    usersService.getAllUsers().then((users) => setUsers(users))
  }, [])

  const notifyWith = (message, type='info') => {
    setInfo({
      message, type
    })

    setTimeout(() => {
      setInfo({ message: null } )
    }, 3000)
  }

  const login = async (username, password) => {
    try {
      const user = await loginService.login({ username, password })
      setUser(user)
      storageService.saveUser(user)
      notifyWith('welcome!')
    } catch(e) {
      notifyWith('wrong username or password', 'error')
    }
  }

  const logout = async () => {
    setUser(null)
    storageService.removeUser()
    notifyWith('logged out')
  }

  const addCourse = async (newCourse) => {
    const addedCourse = await courseService.create(newCourse)
    notifyWith(`A new course '${newCourse.title}' by '${newCourse.company}' added`)
    setCourses(courses.concat(addedCourse))
  }

  const addUser = async (newUser) => {
    const addedUser = await usersService.create(newUser)
    notifyWith('A new user added')
    setUsers(users.concat(addedUser))
    registerFormRef.current.toggleVisibility()
  }

  const like = async (course) => {
    const courseToUpdate = { ...course, likes: course.likes + 1, user: course.user.id }
    const updatedCourse = await courseService.update(courseToUpdate)
    notifyWith(`A like for the blog '${course.title}'`)
    setCourses(courses.map(c => c.id === course.id ? updatedCourse : c))
  }

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar user={user} logout={logout}/>
        <Notification info={info}/>
        <Routes>
          <Route path='/' element={<Home courses={courses} />}/>
          <Route path='/addcourse' element={<AddCoursePage addCourse={addCourse}/>} />
          <Route path='/courses/:id' element={<CourseInfoPage courses={courses} like={like} />} />
          <Route path='/companies' element={<CompaniesList users={users}/>} />
          <Route path='/companies/:id' element={<CompanyInfoPage users={users}/>} />
          <Route path='/login' element={<LoginForm login={login} info={info} registerFormRef={registerFormRef}
            addUser={addUser}/>} />
          <Route path='/feed' element={<Feed user={user}/>} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
