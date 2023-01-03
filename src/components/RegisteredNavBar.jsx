import React from 'react'
import {IoPersonCircle }from  'react-icons/io5'
function RegisteredNavBar() {
  return (
  

 <div className='bg-gradient-to-r from-cyan-500 to-blue-600 h-[10vh]  text-white font-semibold flex '>
 <div className='w-full flex items-center mx-[100px] justify-between '>
 <h1 className='font-bold text-3xl'>TICKETSPRI</h1>
 <div className='flex items-center space-x-5 '>
     <ul className='flex space-x-5 '>
     <li className='text-3xl'>Easy coach</li>
     <li className='text-4xl'><IoPersonCircle/></li>
     </ul>
 </div>
 </div>
</div>
  )
}

export default RegisteredNavBar
