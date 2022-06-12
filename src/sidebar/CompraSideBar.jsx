import React, { useContext } from "react";

import ShippingCartContext from '../cartstore/ShippingCartContext'
import { CompraInfo } from "./CompraInfo";
import TotalDeCompra from "./TotalDeCompra";
import TotalDePagoPorProducto from "./TotalDePagoPorProducto";

export const CompraSideBar = () => {

  const {  addToTheCart, cartProductsContainer, decreaseQuantityToPurchase } = useContext(ShippingCartContext)
 

  return (<>
    {
      cartProductsContainer.length >= 1 ?
      cartProductsContainer.map(producto => ( 
          <div key={producto.id}  >
            <p> producto : {producto.title}</p>
            <p>  el stock disponible es  :{producto.stock}   </p>
            <div key={producto.id}> cantidad a comprars : {producto.cantidad} </div>
              <button className="aum" onClick={() =>  addToTheCart( producto.id ) } > + </button>
              <button className="dism" onClick={() => decreaseQuantityToPurchase( producto.id ) }> - </button>
            <p> ${producto.precio}</p>
            <p> total de pago por : { producto.title  }  </p>  
            <TotalDePagoPorProducto id={producto.id } />
            <CompraInfo
            id={producto.id}
            />
          </div> 
          ) ) 
        :
        <div> Seleccione un producto </div>
    }
    <TotalDeCompra />
    
  </>)
}

