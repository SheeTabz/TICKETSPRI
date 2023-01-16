import React from 'react'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Nav3 from '../components/Nav3'
import SearchLoc from '../components/SearchLoc'


function LandingPage({user, setUser, handleSearch, initials}) {
  return (
   <>
    <div className='background'>
 <Nav3 user={user} setUser={setUser} initials={initials}/>
<SearchLoc handleSearch={handleSearch}/>


     </div>
     <AboutUs/>
     <Footer/>
     </>
  )
}

export default LandingPage