import React from 'react'

const EventHandling = () => {
    function printMyName(name){
        console.log(name);
    }
  return (
    <>
     <button onClick={() =>printMyName('Venkatesh Khatake')}>Click Me!</button>
    </>
  )
}

export default EventHandling
