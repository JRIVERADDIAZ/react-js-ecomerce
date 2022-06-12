import React, { useContext } from 'react'

import ShippingCartContext from '../cartstore/ShippingCartContext';

const AddCartButton = ({ id, stock }) => {

  const { addToTheCart } = useContext(ShippingCartContext)

  return (
    <>
      <button onClick={() => addToTheCart(id, stock)} className='button'> Add To Cart </button>
    </>
  )
}

export default AddCartButton