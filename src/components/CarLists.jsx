import React from 'react'
import CarCard from './CarCard'

function CarLists() {
    // fetches will ocuur here for both the carlist fetch and the update car 
  return (
    <div className='flex flex-col'>
        <div className='border-b-2 border-gray-200'>
        <h1 className='text-4xl font-medium p-4'>Car List</h1>
        </div>
        <div className=' flex flex-col flex-1 space-y-6 mt-[30px]  max-h-[87vh] overflow-y-auto'>
        <CarCard/>
      
        </div>
    </div>
  )
}
export default CarLists