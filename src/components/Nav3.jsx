import React, { useState } from 'react'
import {nav1} from './data'
import TransButton from './TransButton'
import WhiteButton from './WhiteButton'
import {IoPersonCircle }from  'react-icons/io5'
function Nav3({user}) {


  return (
    <div className='h-[10vh] flex text-white font-semibold'>
    <div className='flex items-center md:container md:flex-row md:m-auto justify-between flex-col w-full '>
    <h1 className='font-bold lg:text-3xl text-2xl'>TICKETSPRI</h1>
    <div className='flex items-center md:space-x-5  space-x-2 md:w-fit w-full '>
        <ul className='flex md:space-x-5 md:w-fit  w-full justify-around space-x-2'>
        {nav1.map((data, index) => {
        return <li key={index}>{data.name}</li>
        })}
        </ul>
        <div className='flex flex-row space-x-5 hidden md:block'>
            {/* <TransButton/> */}
            {user ?  <span className='md:text-4xl text-3xl'><IoPersonCircle/></span>:<WhiteButton/>}
           
        </div>
    </div>
    </div>
</div>
  )
}

export default Nav3