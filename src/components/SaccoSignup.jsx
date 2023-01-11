import React, {useState} from 'react'
import FormTemplate from './FormTemplate'

function SaccoSignup({login}) {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    password_confirmation: "",
  })
  
  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  return (
   <FormTemplate login={login}>
     <form className='flex flex-col  space-y-6'>
    <div className='flex flex-col  space-y-4 px-5  form '>
        <input 
        type="name" 
        name="name" 
        placeholder="Sacco name" 
        onChange={handleChange}/>
        <input type="text" 
        name="email" 
        placeholder="Sacco Email"
        onChange={handleChange} />
        <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        onChange={handleChange}/>
        <input 
        type="password-confirmation" 
        name="password_confirmation" 
        placeholder="Password Confirmation"
        onChange={handleChange} />
        </div>
        <button type="submit" className='submit w-full'>Sign up</button>
        </form>
   </FormTemplate>
  )
}

export default SaccoSignup