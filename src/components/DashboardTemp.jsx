import React,{useEffect} from 'react'
import {GrFormAdd} from 'react-icons/gr'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import RegisteredNavBar from './RegisteredNavBar'
function DashboardTemp({children, sacco, setSacco}) {

    const navigate = useNavigate()
    useEffect(() => {
        fetch("/sacco/me")
       .then(res => {
         if(res.ok){
           res.json().then(data => {
             setSacco(data)
            
           })
         }
         else{
           res.json().then(err => console.log(err.errors))
         }
       })
       
     
     },[])
console.log(sacco)

// function handleLogOut(){

//     fetch("/sacco/logout",{
//       method: "DELETE"
//     })
//     .then(resp => resp.json())
//     .then(setSacco(null))
//     navigate("/")
//       }

  return (
    <>
    <RegisteredNavBar sacco={sacco} setSacco={setSacco}/>
    <div className='flex lg:flex-row lg:py-8 lg:space-x-8  lg:mx-[100px] flex-col md:mx-[20px] mx-2'>
    <aside className="lg:w-72 w-full" aria-label="Sidebar" >
       <div class=" py-4 px-3 lg:bg-gray-100 rounded ">
          <ul class="lg:space-y-2 dashboard flex lg:flex-col flex-row ">
            
             <li className="">
             <Link to="/saccoAccont">
                 <span class="ml-3">Account</span>
                 </Link>
             </li>
            

             <li className="">
                <Link to="/saccoBuses">
                 <span class="ml-3">Car List</span>
                 </Link>
             </li>
             <li >
                <Link to="/saccoNew" className="flex w-full justify-between">
                 <span class="ml-3">Add Car</span>
                 <GrFormAdd className='text-2xl'/>
                 </Link>
             </li>
             <li className="" >
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

export default DashboardTemp