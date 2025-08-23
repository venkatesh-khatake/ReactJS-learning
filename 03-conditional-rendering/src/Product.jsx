import React from 'react'

const Product = ({inStock}) => {
  return (
    <div>
      <h1
        style={{
            color:inStock? 'green' : 'red'
        }}
      >{inStock ? "Available" : "Out of stock."}</h1>
    </div>
  )
}

export default Product
