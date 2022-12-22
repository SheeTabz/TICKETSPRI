import React, { useState } from 'react'
import LogInForm from '../components/LogInForm'
import NavBar2 from '../components/NavBar2'
import SignUpForm from '../components/SignUpForm'


function LogInPage() {
    const [showLogin, setShowLogin] = useState(true)
  return (
    <div>
           {showLogin ? (
<LogInForm signup={() => setShowLogin(false)} />
        ) : (
<SignUpForm login={() => setShowLogin(true)} />
        )}
    </div>
  )
}

export default LogInPage