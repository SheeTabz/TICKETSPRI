import React from 'react'
import {MdOutlineModeEdit} from 'react-icons/md'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { cars} from './data'


function CarCard() {

    function handleClick(){
        alert('Edit me')
    }
  return (
    <>
    {cars.map(car => {
        return (
            <>
            <div className='w-full flex justify-between px-4 py-5  items-center shadow-md'>
            <div className='car-det'>
                <h1>{car.name}</h1>
                <p>{car.desc}</p>
            </div>
            <div className='car-det'>
            <h1>{car.no}</h1>
                <p>Seats left</p> 
            </div>
            <div className='car-det'>
            <h1>{car.from}</h1>
            </div>
            <div className='car-det'>
            <h1>{car.to}</h1>
            </div>
            <div className='car-det'>
                <h1>Price</h1>
                <p className='font-medium'>KES {car.price}</p>
            </div>
            <div className='flex text-2xl space-x-3 text-cyan-500 cursor-pointer'>
                <span className='text-cyan-500' onClick={handleClick}><MdOutlineModeEdit/></span>
                <span><RiDeleteBin5Line/></span>
                </div>
            
                </div>
               
                </>
        )
    })}
</>
  )
}

export default CarCard