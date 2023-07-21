import React, { useEffect, useState } from 'react'
import { Container, Typography, Box } from '@mui/material'
import CompanyProfileInfo from './CompanyProfileInfo'
import feedpostService from '../services/feedposts'
import FeedPostCard from '../components/Feed/FeedPostCard'
import Togglable from '../components/Togglable'
import ModifyPost from './ModifyPost'

const PrivateProfile = ({ user, setUser }) => {
  const [userFeedPosts, setuserFeedPosts] = useState([])

  useEffect(() => {
    const fetchuserFeedPosts = async () => {
      const allFeedPosts = await feedpostService.getAll()
      const userFeedPosts = allFeedPosts.filter(b => b.user.id === user.id)
      setuserFeedPosts(userFeedPosts)
    }
    fetchuserFeedPosts()
  }, [user.id])

  if (!user) {
    return null
  }

  return (
    <Container sx={{ marginTop: '7rem', minHeight: '100vh', backgroundColor: 'white', borderRadius: '1rem', marginBottom: '1rem' }}>
      <Typography>Käyttäjän {user.name} Profiili</Typography>
      <CompanyProfileInfo user={user} setUser={setUser} />
      <Typography>Seuraa ilmoitustesi tilannetta</Typography>
      {userFeedPosts.map(m => (
        <Box key={m.id} sx={{ marginTop: '1rem' }}>
          <FeedPostCard post={m}/>
          <Togglable buttonLabel='Muokkaa'>
            <ModifyPost post={m}/>
          </Togglable>
        </Box>
      ))}
    </Container>
  )
}

export default PrivateProfile
