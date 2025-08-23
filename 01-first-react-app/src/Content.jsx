import React from 'react'

const Content = ({description}) => {
  return (
    <div
        style={{
            width:'100%',
            height:'80vh',
            display:'flex',
            alignItems:'center',
            justifyContent:"center",
            fontSize:"70px",
            fontWeight:'900'
        }}
    >
      <p>{description}</p>
    </div>
  )
}

export default Content
