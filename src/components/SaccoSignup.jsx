import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import FormTemplate from './FormTemplate'

function SaccoSignup({login, setSacco}) {

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    password_confirmation: "",
    
  })
  const navigate = useNavigate()


function handleSubmit(e){
  e.preventDefault();
  fetch("/sacco/signup",
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
      .then(data => setSacco(data))
      navigate("/saccoAccount")
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

  return (
   <FormTemplate login={login}>
     <form className='flex flex-col  space-y-6' onSubmit={handleSubmit}>
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