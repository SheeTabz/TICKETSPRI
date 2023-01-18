import React, {useState}from 'react'
import FormTemplate from './FormTemplate'
import {useNavigate} from 'react-router-dom'

function SaccoLogin({signup, setSacco}) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    })
  const navigate = useNavigate()
function handleSubmit(e){
  e.preventDefault()
fetch("/sacco/login",
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
      navigate("/saccoBuses")
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
   <FormTemplate signup={signup}>
    <form className='flex flex-col  space-y-6' onSubmit={handleSubmit}>
        <div className='flex flex-col  space-y-4 px-5  form '>
        <input type="text" 
        name="email" 
        placeholder="Sacco Email" 
        value={formData.email}
        onChange={handleChange}
        />
        <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={formData.password}
        onChange={handleChange}/>
        <div className='flex justify-between'>
            <div className='text-gray-400 space-x-3'>
            <input type="checkbox" name="rememberMe" checked />
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

export default SaccoLogin