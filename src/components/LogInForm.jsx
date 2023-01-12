import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormTemplate from './FormTemplate'

function LogInForm({signup}) {
const navigate = useNavigate()

function handleClick(e){
  alert("hello")
  navigate('/bookTicket')
}

  return (
    <FormTemplate signup={signup}>
        <form className='flex flex-col  space-y-6' onClick={handleClick}>
        <div className='flex flex-col  space-y-4 px-5  form '>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <div className='flex justify-between'>
            <div className='text-gray-400 space-x-3'>
            <input type="checkbox" name="rememberMe" />
            <label >Remember Me</label>
            </div>
            <div className='text-cyan-500'>Forgot password?</div>
        </div>
        </div>
        <button type="submit" className='submit'>Log in</button>
        </form>
    </FormTemplate>
  )
}

export default LogInForm