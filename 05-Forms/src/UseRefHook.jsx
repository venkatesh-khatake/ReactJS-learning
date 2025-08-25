import React from 'react'
import { useState, useRef } from 'react'

const UseRefHook = () => {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);

    renderCount.current += 1;
  return (
    <div>
      <p>Count : {count}</p>
      <p>Component Rendered : {renderCount.current} times</p>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default UseRefHook
