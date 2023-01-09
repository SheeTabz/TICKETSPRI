import React from 'react'
import FormTemplate from './FormTemplate'

function SaccoSignup({login}) {
  return (
   <FormTemplate login={login}>
     <form className='flex flex-col  space-y-6'>
    <div className='flex flex-col  space-y-4 px-5  form '>
        <input type="name" name="name" placeholder="Sacco name" />
        <input type="text" name="email" placeholder="Sacco Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password-confirmation" name="password-confirmation" placeholder="Password Confirmation" />
        </div>
        <button type="submit" className='submit w-full'>Sign up</button>
        </form>
   </FormTemplate>
  )
}

export default SaccoSignup