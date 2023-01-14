import React, { useState } from 'react'
import LogInForm from '../components/LogInForm'
import NavBar2 from '../components/NavBar2'

import SignUpForm from '../components/SignUpForm'


function LogInPage({handleuser, user, setUser}) {
    const [showLogin, setShowLogin] = useState(true)
  return (
    <div>
       
           {showLogin ? (
<LogInForm signup={() => setShowLogin(false)} handleuser={handleuser} user={user} setUser={setUser}/>
        ) : (
<SignUpForm login={() => setShowLogin(true)} handleuser={handleuser} user={user}/>
        )}
    </div>
  )
}

export default LogInPage