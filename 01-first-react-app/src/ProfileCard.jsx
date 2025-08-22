import React from 'react'

const ProfileCard = () => {
  return (
    <div
    style={{
        width:"300px",
        height:"200px",
        border:"1px solid white",
        borderRadius:"15px",
        textAlign:'left',
        padding:"15px"
    }}
    >
        <h2>Name : Venkatesh k.</h2>
        <h2>Age : 23</h2>
        <p>Bio : Frontend Developer learning React.</p>
        <p>Date : {new Date().toDateString()}</p>
      
    </div>
  )
}

export default ProfileCard
