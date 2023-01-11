import React, { useState } from 'react'
import Nav3 from './Nav3'

function FormTemplate({children, login, signup}) {



  return (
    <div className='background-full h-screen'>
        <Nav3/>
        <div className=' flex flex-col justify-center items-center space-y-3 xl:h-[80%] lg:h-[85%] md:h-[60%] h-[80%]'>
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