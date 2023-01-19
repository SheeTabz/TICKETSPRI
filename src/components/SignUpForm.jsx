import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import FormTemplate from './FormTemplate'

function SignUpForm({login, handleuser, user, initials}) {
const [formData, setFormData] = useState({
  name:"",
  email:"",
  ID_no: "",
  phone_no: "",
  password:"",
 
})
const navigate = useNavigate()

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
      navigate("/")
    }
    else{
      resp.json().then( error => console.log(error.errors));
    }

  })
  // console.log(user)


}
  return (
    <FormTemplate login={login} user={user} initials={initials}>
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
        type="text" 
        name="ID_no" 
        placeholder="ID number" 
        onChange={handleChange}/>
         <input 
         id='phone'
        type="tel" 
        name="phone_no" 
        placeholder="Phone number (+254 700 000 000)" 
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