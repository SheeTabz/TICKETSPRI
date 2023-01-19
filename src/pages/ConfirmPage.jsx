import React from 'react'
import BookingCard from '../components/BookingCard'
import Footer from '../components/Footer'
import NavBar2 from '../components/NavBar2'

function ConfirmPage({user, setUser, initials}) {
  return (
    <>
    <NavBar2 user={user} setUser={setUser} initials={initials}/>
    <div className=''>
      <BookingCard/>  
      {/* <BookingCard/>  
      <BookingCard/>  
      <BookingCard/> */}
    </div>
    <Footer/>
    </>
  )
}

export default ConfirmPage