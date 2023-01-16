import React, { useState } from 'react'
import FormTemplate from './FormTemplate'

function LogInForm({signup, handleuser, user, setUser, initials}) {
const [formData, setFormData] = useState({
email: '',
password: '',
})

function handleSubmit(e){
  e.preventDefault()
fetch("/customer/login",
  {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  }
  )
  .then(resp => {
    if(resp.ok){
      resp.json()
      .then(data => handleuser(data))
    }
    else{
      resp.json().then( error => console.log(error.errors));
    }

  })
}

function handleChange(e){
  setFormData({...formData, [e.target.name]: e.target.value})
}
console.log(formData)
// console.log(user)
  return (
    <FormTemplate signup={signup} user={user} setUser={setUser} initials={initials}>
        <form className='flex flex-col  space-y-6' onSubmit={handleSubmit}>
        <div className='flex flex-col  space-y-4 px-5  form '>
        <input 
        type="text" 
        name="email" 
        placeholder="Email"
        value={formData.name} 
        onChange={handleChange}
        />
     <input 
        type="password" 
        name="password" 
        placeholder="Password"
        value={formData.password} 
        onChange={handleChange}
        />
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