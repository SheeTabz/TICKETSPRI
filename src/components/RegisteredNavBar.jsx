import React from 'react'
import {IoPersonCircle }from  'react-icons/io5'
import { Link } from 'react-router-dom'
function RegisteredNavBar() {
  return (
  

 <div className='bg-gradient-to-r from-cyan-500 to-blue-600 h-[10vh]  text-white font-semibold flex '>
 <div className='w-full flex items-center lg:mx-[100px] justify-between md:mx-[20px] sm:mx-2'>
 <h1 className='font-bold md:text-3xl text-xl '>
  <Link to="/" className='text-white no-underline'>
  TICKETSPRI
  </Link></h1>
  
 <div className='flex items-center space-x-5 '>
     <ul className='flex space-x-5 '>
     <li className='md:text-3xl text-xl'>Easy coach</li>
     <li className='md:text-4xl text-3xl'><IoPersonCircle/></li>
     </ul>
 </div>
 </div>
</div>
  )
}

export default RegisteredNavBar
