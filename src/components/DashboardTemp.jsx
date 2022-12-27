import React from 'react'
import {GrFormAdd} from 'react-icons/gr'
import Footer from './Footer'
import RegisteredNavBar from './RegisteredNavBar'
function DashboardTemp({children}) {
  return (
    <>
    <RegisteredNavBar/>
    <div className='flex py-8 space-x-8  mx-[100px]'>
    <aside class="w-72 " aria-label="Sidebar">
       <div class=" py-4 px-3 bg-gray-100 rounded ">
          <ul class="space-y-2 dashboard">
             <li className="">
                 <span class="ml-3">Account</span>
            
             </li>
             <li className="">
                 <span class="ml-3">Car List</span>
            
             </li>
             <li className="justify-between">
                 <span class="ml-3">Add Car</span>
                 <GrFormAdd className='text-2xl'/>
            
             </li>
             <li className="">
                 <span class="ml-3 text-red-500">Delete account</span>
                
            
             </li>
           
          </ul>
       </div>
    </aside>
    <div className='border-2 border-gray-200 flex-1  h-screen rounded'>
        {children}
    </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default DashboardTemp