import React, {useState} from 'react'
import FormTemplate from './FormTemplate'

function SignUpForm({login, handleuser, user}) {
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
  .then(resp => {
    if(resp.ok){
      resp.json()
      .then(data => handleuser(data))
    }
    else{
      resp.json().then( error => console.log(error.errors));
    }

  })
  // console.log(user)
 

}
  return (
    <FormTemplate login={login} user={user}>
  <form className='flex flex-col  space-y-6' onSubmit={handleClick}>
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
      
        type="password" 
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