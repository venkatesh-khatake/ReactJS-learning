import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(15);


  
  // let counter = 55;

  const increase = ()=>{x
    console.log('clicked',counter)
    // counter = counter + 1;
    setCounter(counter + 1  )
  }
  const decrease = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
     <h1>Hello World!</h1>
     <h2>Counter Value : {counter}</h2>
     <button
     onClick={increase}>Increase</button>
     <br />
    <br />
     <button onClick={decrease}>Decrease </button>
    </>
  )
}

export default App
