import React from 'react'
import { Link } from 'react-router-dom'
import {nav1} from './data'
import TransButton from './TransButton'
import WhiteButton from './WhiteButton'
function Nav3() {
  return (
    <div className='h-[10vh] flex text-white font-semibold'>
    <div className='flex items-center md:container md:flex-row md:m-auto justify-between flex-col w-full '>
    <h1 className='font-bold lg:text-3xl text-2xl'>TICKETSPRI</h1>
    <div className='flex items-center md:space-x-5  space-x-2 md:w-fit w-full '>
        <ul className='flex md:space-x-5 md:w-fit  w-full justify-around space-x-2 items-center'>
        {nav1.map((data, index) => {
        return <Link to={data.path} className="text-white font-semibold no-underline"><li key={index}>{data.name}</li></Link> 
        })}
        </ul>
        <div className='flex flex-row space-x-5  md:block'>
             {/* <TransButton/>  */}
             <Link to="/login"><WhiteButton/></Link>
        </div>
    </div>
    </div>
</div>
  )
}

export default Nav3