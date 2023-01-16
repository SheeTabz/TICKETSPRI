import React from 'react'
import { Link } from 'react-router-dom'
function WhiteButton() {
  return (
    <>
    
  

<div class="dropdown inline-block relative">
  <button class="text-cyan-500  w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2   text-gray-700 shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button">
    <span class="mr-1">Sign in</span>
    {/* <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg> */}
  </button>
  <ul class="dropdown-menu hidden font-medium text-gray-700 pt-1 absolute right-0 z-20 w-56 py-2 mt-0.5 overflow-hidden origin-top-left  bg-white rounded-md shadow-xl " >
  
    <li class=""><Link to="/login" class="rounded-t hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap no-underline text-black" >As customer</Link></li>
    <li class=""><Link to="/saccolog" class="rounded-t hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap no-underline text-black" >As sacco</Link></li>
    
  </ul>
</div>


    
    </>
  )
}

export default WhiteButton