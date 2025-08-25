import React, { useState } from 'react'
import './App.css'


const App = () => {
    const [formData, setFormData] = useState({name : "", email : ""});
      const [error, setError] = useState({})


    const handleChange = (e)=>{
      setFormData({
        ...formData,
        [e.target.name] : e.target.value,
      })
    }

    const handleSubmit = (e)=>{
      e.preventDefault();

       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple regex for email

      // if(formData.name == "" || formData.email == ""){
      //   alert("All fields are mandatory.")
      // }
      // else if(!emailPattern.test(formData.email)){
      //     alert("Please enter a valid email address.");
      // }
      // else{
      //   alert("Form submitted Successfully.")
      // }


      let newError = {};


      if(formData.name ===""){
        newError.name = "Name is required";
      }
      
      if(formData.email === ""){
        newError.email = "Email is requred."
      }
      else if(!emailPattern.test(formData.email)){
        newError.email = "Invalid Email format";
      }

      setError(newError);

      if (Object.keys(newError).length === 0) {
      alert("Form submitted successfully!");
    }

    }

    
    
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your Name' value={formData.name} name = "name" onChange={handleChange} />
        <br />
                  {error.name && <p style={{color:'red'}}>{error.name}</p>}

        <br />
        <br />
        <input type="text" placeholder='Enter your Email' value={formData.email} name='email' onChange={handleChange} />
        <br />
          
                    {error.email && <p style={{color:'red'}}>{error.email}</p>}


        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
