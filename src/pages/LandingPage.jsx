import React from 'react'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Nav3 from '../components/Nav3'
import SearchLoc from '../components/SearchLoc'

function LandingPage({handleSearch}) {
  return (
   <>
    <div className='background'>
 <Nav3/>
<SearchLoc handleSearch={handleSearch}/>

     </div>
     <AboutUs/>
     <Footer/>
     </>
  )
}

export default LandingPage