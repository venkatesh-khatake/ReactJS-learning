import React from 'react'
import { useState } from 'react'

const ShowHide = () => {
    const [isShow, setIsShow] = useState(true);

    const handleShow = ()=>{
        setIsShow(!isShow);
    }
  return (
    <div>
              <button onClick={handleShow}>{isShow ? "Hide" : "Show"}</button>

      <h1
        style={{
            display: isShow ? 'block' : 'none',
        }}
      >Hello, React</h1>
    </div>
  )
}

export default ShowHide
