import React, {useState} from 'react'
import FormTemplate from './FormTemplate'

function SignUpForm({login}) {
const [formData, setFormData] = useState({
  name:"",
  email:"",
  password:"",
  password_confirmation: "",
})

function handleChange(e){
  setFormData({...formData, [e.target.name]: e.target.value})
}
console.log(formData)

function handleClick(e) {
  e.preventDefault()
  fetch("/customer/signup",
  {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  }
  )
  .then(resp => resp.json()
  .then(data => console.log(data)))

}
  return (
    <FormTemplate login={login}>
  <form className='flex flex-col  space-y-6' onClick={handleClick}>
    <div className='flex flex-col  space-y-4 px-5  form '>
        <input 
        type="name" 
        name="name" 
        placeholder="Full name" 
        onChange={handleChange}/>
        <input 
        type="text" 
        name="email" 
        placeholder="Email" 
        onChange={handleChange}/>
        <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        onChange={handleChange}/>
        <input 
        type="password-confirmation" 
        name="password_confirmation" 
        placeholder="Password Confirmation" 
        onChange={handleChange}/>
        </div>
        <button type="submit" className='submit w-full'>Sign up</button>
        </form>
    </FormTemplate>
  )
}

export default SignUpForm