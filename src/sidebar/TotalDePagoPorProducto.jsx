import React, { useContext } from "react";

import ShippingCartContext from '../cartstore/ShippingCartContext'

const TotalDePagoPorProducto = (id) => {
    const { totalAmountToPayPeerItem } = useContext(ShippingCartContext)
    const totalPeerItem = totalAmountToPayPeerItem(id)
    
  return (
    <>
     <hr/>
    <p>
         total de pago por item :{ totalPeerItem  }
    </p>
   
    </>
  )
}

export default TotalDePagoPorProducto