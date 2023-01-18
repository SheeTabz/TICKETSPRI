import React, {useState} from 'react'
import SaccoLogin from '../components/SaccoLogin'
import SaccoSignup from '../components/SaccoSignup'

function SaccoLogiPage({setSacco}) {
    const [showLogin, setShowLogin] = useState(true)
    return (
      <div>
         
             {showLogin ? (
  <SaccoLogin signup={() => setShowLogin(false)} setSacco={setSacco}/>
          ) : (
  <SaccoSignup login={() => setShowLogin(true)} setSacco={setSacco}/>
          )}
      </div>
    )
}

export default SaccoLogiPage