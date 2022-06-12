import React, { useContext } from 'react'
import ShippingCartContext from '../cartstore/ShippingCartContext'

export const CartcontainCounter = () => {

    const  { cartContainCounter  }  = useContext(ShippingCartContext)
    
   const { quanity } = cartContainCounter  

    return (
        <>
            <span> { quanity } </span>
        </>
    )
}

