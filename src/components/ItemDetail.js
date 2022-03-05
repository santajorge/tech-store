import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div>
        <img src={product.image} alt={product.name} />
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <p>{product.detail}</p>
    </div>
  )
}

export default ItemDetail