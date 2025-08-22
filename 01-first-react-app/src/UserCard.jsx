import React from 'react'

const UserCard = ({name, city, age}) => {
  return (
    <div className='userCard'
    style={{
        width:"250px",
        height:"150px",
        border:"1px solid grey",
        borderRadius:'15px',
        padding:"15px",
        textAlign:"left",
        marginBottom:'10px'
    }}
    >
      <h3>Name : {name}</h3>
      <h3>Age : {age}</h3>
      <h3>City : {city}</h3>
    </div>
  )
}
export default UserCard
