import React, {useState} from 'react'
import DashboardTemp from './DashboardTemp'

function SaccoAcc({sacco,setSacco}) {
    const [formData, setFormData] = useState({
        name: sacco.name,
        email:sacco.email,
        
       
      })
      function handleClick(e) {
        e.preventDefault()
        fetch(`/saccos/${sacco.id}`,
        {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData)
        }
        )
        .then(resp => {
          if(resp.ok){
            resp.json()
            .then(data => setSacco(data))
           
          }
          else{
            resp.json().then( error => console.log(error.errors));
          }
      
        })
        console.log(formData)
   
      
      }
      console.log(sacco)
    function handleChange(e){
      setFormData({...formData, [e.target.name]: e.target.value})
    }
  return (
    <DashboardTemp sacco={sacco} setSacco={setSacco}>
    <div className="flex flex-col  h-screen   ">
          <div className="flex justify-between  border-b-2 border-gray-200 p-1 md:p-5 ">
            <h1 className=" text-3xl font-medium">Profile</h1>
              <button class="bg-blue-500 hover:bg-blue-700 text-white text-center text-xs md:text-xl f py-1 px-2 xl:md:py-2 xl:md:px-6 md:font-bold xl:py-2 xl:px-4 rounded "
            > Save
            </button>
          </div>
          <form class="w-full md:p-2 " onSubmit={handleClick}>
          
              <div class="w-full xl:w-1/2 px-3  xl:mb-0 ">
                <label
                  class="block uppercase tracking-wide  text-gray-700 text-xs md:text-sm font-regular xl:mb-2 "
                  for="grid-first-name"
                >
                  Name
                </label>
                <input
                  class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded md:py-1 px-2 xl:py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 "
                  id="grid-first-name"
                  type="text"
                  name='name'
                  placeholder="Scania"
                 value={formData.name}
                 onChange={handleChange}
                  
                />
              </div>
              <div class="w-full xl:w-1/2 px-3 xl:mb-2">
                <label
                  class="block uppercase tracking-wide  text-gray-700 text-xs md:text-sm font-regular xl:mb-2"
                  for="grid-last-name"
                >
                 Email
                </label>
                <input
                  class="appearance-none block w-full  text-gray-700 border border-gray-200 rounded md:py-1 px-2 xl:py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="grid-last-name"
                  type="text"
                  name="email"
                  placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                />
              </div>
          

            {/* 2nd row */}
           

  

          
             <div class="w-full xl:w-1/2 px-3  xl:mb-0 ">
              <button  type="submit "class="bg-blue-500 hover:bg-blue-700 text-white text-center text-xs md:text-xl f py-1 px-2 xl:md:py-2 xl:md:px-6 md:font-bold xl:py-2 xl:px-4 rounded "
            >

              Edit
            </button>
            </div>
          </form>
        </div>
    </DashboardTemp>
    
  )
}

export default SaccoAcc