import React from 'react'

const UserList = ({id, name, age}) => {
  return (
    <div>
      <h2 key = {id}>Name : {name} Age : {age}</h2>
    </div>
  )
}

export default UserList
