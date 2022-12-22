import React from 'react'


function SearchLoc() {
  return (
    <div className='mt-[150px] flex flex-col h-full items-center space-y-8'>
        <h1 className='text-white text-6xl text-'>Where will you go next ?</h1>
        <form className='formsearch '>

            <div className='search '>
                
               <label>From</label>
                <select class="" aria-label=".form-select-lg example">
        <option selected>Select </option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
            </div>

            <div className='search'>
                <label>To</label>
                <select class="" aria-label=".form-select-lg example" label="Select">
        <option selected>Select</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
    </select>
            </div>

            <div className='search'>
                <label>Depart</label>
                <input type="date" name="to" value=""  placeholder='current date'/>
            </div>
            <div className='search'>
                <label>Return</label>
                <input type="date" name="to" value=""  placeholder='current date'/>
            </div>
            <button type="submit" className='h-full button'>Search</button>
        </form>
    </div>
  )
}

export default SearchLoc