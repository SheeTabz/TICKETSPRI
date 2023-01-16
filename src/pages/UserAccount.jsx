import React from 'react'
import UserDashboard from '../components/UserDashboard'

function UserAccount({user, setUser, initials,}) {
  return (
    <>
    <UserDashboard user={user} setUser={setUser} initials={initials}/>
    </>
  )
}

export default UserAccount