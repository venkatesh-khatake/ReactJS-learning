import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

const UncontrolledForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const [message, setMessage] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        // alert(`Hello ${nameRef.current.value}, Your email is ${emailRef.current.value}`);

        setMessage(`Hello ${nameRef.current.value}, Your email is ${emailRef.current.value}`);

    }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your Name' ref={nameRef}/>
        <br />
        <br />
        <input type="email" placeholder='Enter your Email' ref={emailRef} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h3>{message}</h3>
    </div>
  )
}

export default UncontrolledForm
