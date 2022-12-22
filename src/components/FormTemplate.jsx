import React, { useState } from 'react'

function FormTemplate({children, login, signup}) {
// const [active, setActive] = useState('')

// function getId(event){
//     const el = event.target.id 
//     setActive(el)
//     console.log(el) 

// }


  return (
    <div className='background-full'>
        <div className='h-screen flex flex-col justify-center items-center space-y-3'>
        <h1 className='font-bold text-3xl text-white'>TICKETSPRI</h1>
        <div className='bg-white  w-[400px] pt-5 space-y-4 rounded-md'>
            <div className='space-x-4 flex justify-center items-center'>
                <button id='btn1' className="btn" onClick={login} >SIGN IN</button>
                <button id='btn2' className='btn' onClick={signup}>SIGN UP</button>
            </div>
{children}
        </div>
        </div>
    </div>
  )
}

export default FormTemplate