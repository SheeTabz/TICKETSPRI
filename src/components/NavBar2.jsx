import React from 'react'
import {nav2} from './data'
import TransButton from './TransButton'
import WhiteButton from './WhiteButton'
import {IoPersonCircle }from  'react-icons/io5'

function NavBar2({user, setUser}) {
  function handleClick(){

    fetch("/customer/logout",{
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(setUser(null))
      }
      console.log(user)
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-600 h-[10vh] flex text-white font-semibold'>
        <div className='flex items-center lg:container m-auto justify-between '>
        <h1 className='font-bold text-3xl'>TICKETSPRI</h1>
        <div className='flex items-center space-x-5 '>
            <ul className='flex space-x-5 font-'>
            {nav2.map((data, index) => {
            return <li key={index}>{data.name}</li>
            })}
            </ul>
            <div className='flex space-x-5'>
              
                {user?  
            (<div className='flex flex-row space-x-5'>
              <button className='md:px-5 md:py-2  px-2 border-2 border-black rounded-md border-white ' onClick={handleClick}>Log out </button>
            <span className='md:text-4xl text-3xl'><IoPersonCircle/></span></div>)
            :<WhiteButton/>}
                
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default NavBar2