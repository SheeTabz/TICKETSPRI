import React from 'react'
import { Link } from 'react-router-dom'
import {IoPersonCircle }from  'react-icons/io5'
import {BiLogOut} from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'

function LoggedinNav({setUser, initials}) {
    function handleClick(){

        fetch("/customer/logout",{
          method: "DELETE"
        })
        .then(resp => resp.json())
        .then(setUser(null))
          }
       
  return (
    <div>
        <div class="dropdown inline-block relative">
            <div className='flex text-2xl items-center space-x-2 pointer'>
        <span className='md:text-4xl text-3xl'><IoPersonCircle/></span>
        
 
 
    <span class="">{initials}</span>
    {/* <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg> */}
  
  </div>
  <ul class="dropdown-menu hidden font-medium text-gray-700 pt-1 absolute right-0 z-20 w-56 py-2 mt-0.5 overflow-hidden origin-top-left  bg-white rounded-md shadow-xl " >
  
    <li class=""><Link to="/account" class="rounded-t hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap no-underline text-black flex items-center space-x-3" >
    <span className='text-xl font-bold'> <BsFillPersonFill/></span>
        <span>  Account</span>
      </Link></li>
    <li class=""><Link to="/" class="rounded-t hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap no-underline text-black flex items-center space-x-3" >
   <span className='text-red-500 text-xl font-bold'> <BiLogOut/></span>
        <span onClick={handleClick}>Log Out</span>
        </Link></li>
    
  </ul>
</div>
    </div>
  )
}

export default LoggedinNav