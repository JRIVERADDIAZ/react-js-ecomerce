import React, { useContext } from 'react'
import ShippingCartContext from '../cartstore/ShippingCartContext'


export const CompraInfo = ( id ) => {
    const { constRemoveItemFromTheCart } = useContext(ShippingCartContext)
    return (
        <>
         <hr/>
            <button className="pagara" onClick={() => constRemoveItemFromTheCart( id ) }  > quitar del carrito </button>
        <br/>
        <br/>
        </>
    )
}
