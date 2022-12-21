import React from 'react'
import {nav2} from './data'
import TransButton from './TransButton'
import WhiteButton from './WhiteButton'

function NavBar2() {
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
                <TransButton/>
                <WhiteButton/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NavBar2