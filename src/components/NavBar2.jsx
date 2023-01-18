import React from 'react'
import { Link } from 'react-router-dom'
import {nav2} from './data'
import TransButton from './TransButton'
import {IoPersonCircle }from  'react-icons/io5'
import WhiteButton from './WhiteButton'
import LoggedinNav from './LoggedinNav'

function NavBar2({user, setUser, initials}) {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-600 h-[10vh] flex text-white font-semibold'>
        <div className='flex items-center lg:container m-auto justify-between '>
        <h1 className='font-bold text-3xl'>TICKETSPRI</h1>
        <div className='flex items-center space-x-5 '>
            <ul className='flex space-x-5 font-'>
            {nav2.map((data, index) => {
            return <Link to={data.path} className="text-white font-semibold no-underline"><li key={index}>{data.name}</li></Link> 
            })}
            </ul>
            <div className='flex flex-row space-x-5 md:block'>
           
            {user  ?  
          <LoggedinNav  setUser={setUser} initials={initials}/>
            :<WhiteButton/>}
           
        </div>
        </div>
        </div>
    </div>
  )
}

export default NavBar2