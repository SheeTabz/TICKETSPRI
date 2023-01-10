import React, {useState} from 'react'
import SaccoLogin from '../components/SaccoLogin'
import SaccoSignup from '../components/SaccoSignup'

function SaccoLogiPage() {
    const [showLogin, setShowLogin] = useState(true)
    return (
      <div>
         
             {showLogin ? (
  <SaccoLogin signup={() => setShowLogin(false)} />
          ) : (
  <SaccoSignup login={() => setShowLogin(true)} />
          )}
      </div>
    )
}

export default SaccoLogiPage