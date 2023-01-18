import React, { useState } from 'react'

function EditForm({closeForm, saccoBus}) {

console.log(saccoBus)
const [route, setRoute] = useState('');
const [formData, setFormData] = useState({
  vehicle_name: saccoBus.vehicle_name,
  route_id: saccoBus.route_id,
  departure_time: saccoBus.departure_time,
  arrival_time: saccoBus.arrival_time,

})
const routes =[1,2,3,4]

function handleSubmit(e){
e.preventDefault();
  fetch(`/vehicles/${saccoBus.id}`,{
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => console.log(data))
}


const handleChange = e => {
  setFormData({...formData, [e.target.name]: e.target.value})
}
console.log(formData)
  return (
    <div className="">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-xl rounded-3xl sm:p-10">
      <div className="max-w-md mx-auto">
      
        <form className="divide-y divide-gray-200" onSubmit={handleSubmit}>
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div className="flex flex-col">
              <label className="leading-loose">Car Name</label>
              <input 
              type="text" 
              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
              value={formData.vehicle_name}
              name='vehicle_name' 
              onChange={handleChange}/>
            </div>
        
        <div className="flex flex-col">
        <label className="leading-loose">
        Choose a route:
        <select  name='route_id' onChange={handleChange} className="bg-transparent px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">
          <option value={Number(formData.route_id)}>--Please choose a route--</option>
          <option value={Number(1)}>Nairobi - Garissa</option>
          <option value={2}>Kisumu - Nairobi</option>
          <option value={3}>Eldoret - Isiolo</option>
          <option value={4}>Nairobi - Nakuru</option>
        </select>
      </label>
        </div>
            <div className="flex  items-center space-x-4  ">
              <div className="flex flex-col w-full">
                <label className="leading-loose">Pick up</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input type="time" 
                  className="pr-4 pl-5 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                  placeholder="HH:MM"  
                  value={formData.departure_time}
                  name='departure_time'
                  onChange={handleChange}/>
                
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label className="leading-loose">Drop off</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input type="time" 
                  className="pr-4 pl-5 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" 
                  placeholder="Garissa" 
                  name='arrival_time'
                  value={formData.arrival_time}
                  onChange={handleChange}
                  />
                </div>
              </div>
            </div>

          </div>
          <div className="pt-4 flex items-center space-x-4">
              <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none" onClick={()=> closeForm()}>
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
              </button>
              <button type="submit" className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default EditForm