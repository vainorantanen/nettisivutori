import React from 'react'
import CompanyProfile from './CompanyProfile'
import PrivateProfile from './PrivateProfile'

const Profile = ({ user }) => {

  if (!user) {
    return null
  }

  if (user.isCompany === true) {
    return (
      <CompanyProfile user={user}/>
    )
  }

  return (
    <PrivateProfile user={user}/>
  )
}

export default Profile