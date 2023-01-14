import React from 'react'
import { Link } from 'react-router-dom'
import {nav1} from './data'
import TransButton from './TransButton'
import WhiteButton from './WhiteButton'
function NavBar1() {

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-600 h-[10vh] flex text-white font-semibold'>
        <div className='flex items-center lg:container m-auto justify-between '>
        <h1 className='font-bold text-3xl'>TICKETSPRI</h1>
        <div className='flex items-center space-x-5 '>
            <ul className='flex space-x-5 font-'>
            {nav1.map((data, index) => {
            return <Link to={data.path} className="text-white font-semibold no-underline"><li key={index}>{data.name}</li></Link> 
            })}
            </ul>
            <div className='flex space-x-5'>
                {/* <TransButton/> */}
                <Link to="/login"><WhiteButton/></Link>
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default NavBar1