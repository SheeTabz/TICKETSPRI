import React, { useState } from 'react'
import {VscArrowSwap} from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'

function SearchLoc({handleSearch}) {
    const [formData, setFormData] = useState({
        route: '',
        departure: '',
        arrival: ''
    })
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        handleSearch(formData.route)
        navigate('/bookTicket')
    }
    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
console.log(formData)
  return (
    <div className='mt-[150px] flex flex-col h-full items-center space-y-8 '>
        <h1 className='text-white md:text-6xl text-4xl'>Where will you go next ?</h1>
        <form className='formsearch ' onSubmit={handleSubmit}>

            <div className='search '>
                <div className='flex md:w-full  w-fit md:space-x-5 space-x-2 items-center justify-between'>
               <label>From </label>
               <VscArrowSwap/>
          <label>To</label>
               </div>
                <select class="" aria-label=".form-select-lg example" name='route' onChange={handleChange} >
        <option selected>Select route: </option>
        <option value="1">Nairobi - Mombasa</option>
        <option value="2">Kisumu - Nakuru</option>
        <option value="3">Nairobi - Kisumu</option>
        <option value="4">Eldoret - Isiolo</option>
    </select>
            </div>
            <div className='search'>
                <label>Depart</label>
                <input 
                type="date" 
                name="departure" 
                value={formData.departure}  
                onChange={handleChange}/>
            </div>
            <div className='search'>
                <label>Return</label>
                <input 
                type="date" 
                name="arrival" 
                value={formData.arrival}  
                onChange={handleChange}/>
            </div>
            <button type="submit" className='h-full buton'>Search</button>
        </form>
    </div>
  )
}

export default SearchLoc