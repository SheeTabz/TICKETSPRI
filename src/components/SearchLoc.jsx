import React, { useState } from 'react'
import {VscArrowSwap} from 'react-icons/vsc'

function SearchLoc() {
    const [formData, setFormData] = useState({
        route: '',
        departure: '',
        arrival: ''
    })
    
    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
console.log(formData)
  return (
    <div className='mt-[150px] flex flex-col h-full items-center space-y-8'>
        <h1 className='text-white text-6xl text-'>Where will you go next ?</h1>
        <form className='formsearch '>

            <div className='search '>
                <div className='flex w-full space-x-5 items-center justify-between'>
               <label>From </label>
               <VscArrowSwap/>
          <label>To</label>
               </div>
                <select class="" aria-label=".form-select-lg example" name='route' onChange={handleChange} >
        <option selected>Select route: </option>
        <option value="1">Nairobi - Garissa</option>
        <option value="2">Kisumu - Nairobi</option>
        <option value="3">Eldoret - Isiolo</option>
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
            <button type="submit" className='h-full button'>Search</button>
        </form>
    </div>
  )
}

export default SearchLoc