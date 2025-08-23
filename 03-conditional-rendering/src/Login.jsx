import React, { useState } from 'react'

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    // const handleLoggedIn = ()=>{

    // }
  return (
    <div>
      <h1>{isLoggedIn ? "Welcome Back!" : "Please Login "}</h1>
    </div>
  )
}

export default Login
