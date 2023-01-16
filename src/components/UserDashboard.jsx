import React from 'react'
import {GrFormAdd} from 'react-icons/gr'
import Footer from './Footer'
import NavBar2 from './NavBar2'
import RegisteredNavBar from './RegisteredNavBar'


function UserDashboard({children,user, setUser, initials}) {
  return (
    <>
    <NavBar2 user={user} setUser={setUser} initials={initials}/>
    <div className='flex lg:flex-row lg:py-8 lg:space-x-8  lg:mx-[100px] flex-col md:mx-[20px] mx-2'>
    <aside className="lg:w-72 w-full" aria-label="Sidebar" >
       <div class=" py-4 px-3 lg:bg-gray-100 rounded ">
          <ul class="lg:space-y-2 dashboard flex lg:flex-col flex-row ">
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
    <div className='border-2 border-gray-200 lg:flex-1 h-screen rounded '>
        {children}
    </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default UserDashboard