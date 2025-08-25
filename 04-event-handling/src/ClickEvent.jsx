import React, { useState } from 'react'

export const ClickEvent = () => {
    const [bgColor, setBgColor] = useState('');
let r,g,b;
   const handleColor = ()=>{
     r = Math.floor(Math.random() * 255 + 1);
     g = Math.floor(Math.random() * 255 + 1);
     b = Math.floor(Math.random() * 255 + 1);
    setBgColor(r + ","+g+","+b);
   }

   const resetColor = ()=>{
    r = 0;
    g = 0;
    b = 0;
    setBgColor(r + ","+g+","+b);
   }

    
  return (
    <div
    style={{
        width:"200px",
        height:"200px",
        backgroundColor:`rgb(${bgColor})`,
        display:'flex',
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        border:"1px solid white",
        transition:"all 0.5s ease"
    }}
    >
      <button onClick={handleColor}>Click me</button>
      <button onClick={resetColor} style={{
        marginTop:'10px',
      }}>Reset</button>
      {/* <h1>{bgColor}</h1> */}
    </div>
  )
}


export const MouseOverEvent = () => {
    const [bgColor, setBgColor] = useState('');

   const handleColor = ()=>{
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    setBgColor(r + ","+g+","+b);
   }

   

    
  return (
    <div
    style={{
        width:"200px",
        height:"200px",
        backgroundColor:`rgb(${bgColor})`,
        display:'flex',
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        border:"1px solid white",
                transition:"all 0.5s ease"

    }}
    onMouseOver={handleColor}
    >
      {/* <button onClick={handleColor}>Click me</button> */}
      {/* <h1>{bgColor}</h1> */}
    </div>
  )
}


