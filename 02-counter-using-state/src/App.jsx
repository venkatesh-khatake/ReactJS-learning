import React, { useState } from 'react'
import './App.css';
const App = () => {
  const [count, setCount] = useState(0);
  const incCount = ()=>{
    setCount(count + 1);
  }
  const decCount = ()=>{
    setCount(count - 1);
  }
  const resetCount = ()=>{
    setCount(0);
  }

  const [isDark, setIsDark] = useState(true);

  const handleTheme = ()=>{
    setIsDark(!isDark);
  }
  

  return (
    <>
    
    <div style={{
      backgroundColor:isDark ? "black" :  "white",
      color: isDark ? "white" : "black",
      padding:"50px",
      borderRadius:"18px"
      
    }}>
      <h1>Counter App</h1>
      <h1 style={{
        backgroundColor:"tomato",
        borderRadius:"7px",
        color:"white",
        padding:"5px"
      }}>{count}</h1>
      <button onClick={incCount}>Increase</button>
      <button onClick={resetCount} style={{margin:"0px 10px"}}>Reset</button>
      <button onClick={decCount}>Decrease</button>

      </div>
      <div
        style={{
          margin:"10px 0px"
        }}
        >
                  <button onClick={handleTheme}>Theme</button>
      </div>

        </>
  )
}

export default App
