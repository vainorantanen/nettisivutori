import React from 'react'
import { useState, useEffect, useRef } from 'react'

import feedPostService from './services/feedposts'
import loginService from './services/login'
import usersService from './services/users'

import Notification from './components/Notification'
import storageService from './services/storage'
import LoginForm from './components/LoginForm'
import CompaniesList from './components/CompaniesList'
import CompanyInfoPage from './components/CompanyInfoPage'

import ScrollToTop from './components/ScrollToTop'

import {
  Routes, Route
} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'

import './App.css'
import { Box } from '@mui/material'

import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles'
import Home from './components/Home/Home'
import Feed from './components/Feed/Feed'
import AddFeedPostForm from './components/Feed/AddFeedPostForm'
import Profile from './Profile/Profile'

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
})

const App = () => {
  const [user, setUser] = useState('')
  const [info, setInfo] = useState({ message: null })
  const [users, setUsers] = useState([])
  const [ feedPosts, setFeedPosts ] = useState([])

  const registerFormRef = useRef()

  useEffect(() => {
    feedPostService.getAll().then(posts =>
      setFeedPosts( posts )
    )
  }, [])

  useEffect(() => {
    const user = storageService.loadUser()
    setUser(user)
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

  const addUser = async (newUser) => {
    const addedUser = await usersService.create(newUser)
    notifyWith('A new user added')
    setUsers(users.concat(addedUser))
    registerFormRef.current.toggleVisibility()
  }

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar user={user} logout={logout}/>
        <Notification info={info}/>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/yritykset' element={<CompaniesList users={users}/>} />
          <Route path='/yritykset/:id' element={<CompanyInfoPage users={users}/>} />
          <Route path='/login' element={<LoginForm login={login} info={info} registerFormRef={registerFormRef}
            addUser={addUser}/>} />
          <Route path='/tarjouskilpailut' element={<Feed feedPosts={feedPosts}/>} />
          <Route path='/lisaailmoitus' element={<AddFeedPostForm user={user} feedPosts={feedPosts} setFeedPosts={setFeedPosts}/>} />
          <Route path='/profiili' element={<Profile user={user} />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
