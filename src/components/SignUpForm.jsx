import React from 'react'
import FormTemplate from './FormTemplate'

function SignUpForm({login}) {
  return (
    <FormTemplate login={login}>
  <form className='flex flex-col  space-y-6'>
    <div className='flex flex-col  space-y-4 px-5  form '>
        <input type="name" name="name" placeholder="Full name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="password-confirmation" name="password-confirmation" placeholder="Password Confirmation" />
        </div>
        <button type="submit" className='submit w-full'>Sign up</button>
        </form>
    </FormTemplate>
  )
}

export default SignUpForm