import React, { useContext } from 'react'
import ShippingCartContext from '../cartstore/ShippingCartContext'

const TotalDeCompra = () => {
    const { cartContainCounter, totalAmountToPay } = useContext(ShippingCartContext)
    const { quanity } = cartContainCounter
    const total = totalAmountToPay()
    return (
        <div>
            <hr/ >
            <p>  cantidad de productos a comprar: {quanity}  </p>
            <p> cuenta total a pagar:  {total} </p>
        </div>
    )
}

export default TotalDeCompra