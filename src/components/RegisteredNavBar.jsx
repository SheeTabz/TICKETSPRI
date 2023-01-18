import React from 'react'
import {IoPersonCircle }from  'react-icons/io5'
import {BiLogOut} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
function RegisteredNavBar({sacco, setSacco}) {
const navigate = useNavigate()

  function handleLogOut(){
    fetch("/sacco/logout",{
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(setSacco(null))
    navigate("/")
      }
  return (
  
   
 <div className='bg-gradient-to-r from-cyan-500 to-blue-600 h-[10vh]  text-white font-semibold flex '>
 <div className='w-full flex items-center lg:mx-[100px] justify-between md:mx-[20px] mx-2'>
  <Link to='/'>
 <h1 className='font-bold md:text-3xl text-xl'>TICKETSPRI</h1>
 </Link>
 
 <div className='dropdown inline-block relative '>
     <div className='flex items-center space-x-5 '>
     <span className='md:text-2xl text-xl '>{sacco.name}</span>
     <span className='md:text-5xl text-3xl'><IoPersonCircle/></span>
     </div>


     <ul class="dropdown-menu hidden font-medium text-gray-700 pt-1 absolute right-0 z-20 w-56 py-2  mt-1 overflow-hidden origin-top-left  bg-white rounded-md shadow-xl " >
    <li class="">
      <Link to="/" class="rounded-t hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap no-underline text-black flex items-center space-x-3" >
   <span className='text-red-500 text-xl font-bold'> <BiLogOut/></span>
        <span onClick={handleLogOut}>Log Out</span>
        </Link>
        </li>
    
  </ul>
 </div>
 </div>
</div>
  )
}

export default RegisteredNavBar
