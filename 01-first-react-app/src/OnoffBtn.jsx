import React from 'react'
import { useState } from 'react'

const OnoffBtn = () => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = ()=>{
        setIsOn(!isOn);
    }
  return (
    <div>
      <h1>{isOn ? "ON" : "OFF"}</h1>
      <button onClick={handleClick}>Click Me!</button>

    </div>
  )
}

export default OnoffBtn
