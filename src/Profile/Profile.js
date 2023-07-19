import React from 'react'
import CompanyProfile from './CompanyProfile'
import PrivateProfile from './PrivateProfile'
import { Container } from '@mui/material'

const Profile = ({ user }) => {

  if (!user) {
    return null
  }

  if (user.isCompany === true) {
    return (
      <Container>
        <CompanyProfile user={user}/>
      </Container>
    )
  }

  return (
    <Container>
      <PrivateProfile user={user}/>
    </Container>
  )
}

export default Profile