import React from 'react'

function Footer() {

const data = [
    {
        name: 'Privacy Policy',
    },
    {
        name: 'Terms of service'
    },
    {
        name: 'Home',
        path: '/'
    }
]

  return (
    <div className='bg-gray-200 mt-[150px] h-[20vh] '>
        <div className='h-full flex flex-col justify-center items-center container m-auto space-y-5'>
            <div className='border-b-2 border-b-gray-400 w-full' >
            
            </div>
            <div className='w-full flex justify-between'>
            <h1 className='font-bold text-3xl text-center'>TICKETSPRI</h1>
            <ul className='flex space-x-3 text-gray-400'>
                {data.map((list, index) => {
                   return  <li key={index}>{list.name}</li>
                })}
                </ul> 
            <p className=''>&copy; 2022  All Rights preseved</p>
           
            </div>
        </div>
        </div>
  )
}

export default Footer