import React from 'react'
import { Link } from 'react-router-dom'

function WhiteButton() {
  return (
    <>
    <Link to={'/login'}>
    <button className='md:px-5 md:py-2  px-2  py-2 border-2 border-black rounded-md text-cyan-500 bg-white border-transparent'>Sign in </button>
    </Link>
    </>
  )
}

export default WhiteButton