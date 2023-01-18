import React, { useEffect, useState } from 'react'
import {MdOutlineModeEdit} from 'react-icons/md'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { cars} from './data'
import EditForm from './EditForm'


function CarCard({saccoBus}) {


 
console.log(saccoBus)
function handleDelete(vehicle){
    fetch(`/vehicles/${vehicle}`,{
        method: "DELETE",
    })
    .then(res => res.json())
    .then(data => console.log(data))
    console.log(vehicle)
}
const [toggle, setToggle] = useState(false)
function handleClick(){
    setToggle(!toggle)
}

function Card({car, children}){
 
    return (
        <>
        <div className='md:w-full flex md:flex-row flex-col justify-between px-4 py-5  md:items-center shadow-md'>
        <div className='car-det '>
            <h1>{car.vehicle_name}</h1>
            <p>2*2 AC Seats</p>
        </div>
        <div className='car-det'>
        <h1>{car.no_of_seats}</h1>
            <p>Seats left</p> 
        </div>
        <div className='flex md:flex-col flex-row justify-between'>
        <div className='car-det'>
        <h1>{car.route.From_location}</h1>
        </div>
        <div className='car-det'>
        <p className='text-cyan-500'>{car.departure_time}</p>
        </div>
        </div>
        <div className='flex md:flex-col flex-row justify-between'>
        <div className='car-det'>
        <h1>{car.route.To_location}</h1>
        </div>
        <div className='car-det'>
        <p className='text-cyan-500'>{car.arrival_time}</p>
        </div>
        </div>
        <div className='car-det'>
            <h1>Price</h1>
            <p className='font-medium'>KES {car.route.Price}</p>
        </div>
        <div className='flex text-2xl space-x-3 text-cyan-500 cursor-pointer'>
            <span className='text-cyan-500' onClick={handleClick}><MdOutlineModeEdit/></span>
            <span onClick={()=>handleDelete(car.id)}><RiDeleteBin5Line/></span>
            </div>
        
            </div>
            {children}
           
            </>
    )
}

  return (
    <>
    
    {saccoBus && saccoBus.map(car => 
    <Card car={car}>
        {toggle ? <EditForm closeForm={handleClick} saccoBus={car}/> : ''}
    </Card>
    )}
  
</>
  )
}

export default CarCard