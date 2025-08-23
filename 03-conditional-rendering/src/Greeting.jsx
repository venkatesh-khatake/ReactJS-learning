import React from 'react'

const Greeting = ({isMorning}) => {
  return (
    <div>
      <h1>{isMorning ? "Good Morning" : "Good Evening"}</h1>
    </div>
  )
}

export default Greeting
