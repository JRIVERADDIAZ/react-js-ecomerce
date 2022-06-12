import React from 'react'
import { Outlet } from 'react-router-dom'

import { ShippingCartProvider } from './cartstore/ShippingCartContext'
import { ProductsProvider } from './cartstore/ProductsContext'

import NavBar from './navbar/NavBar'


const GeneralSkin = () => {

  return (
    <>




      <ProductsProvider>
        <ShippingCartProvider>
          <NavBar />
          <Outlet />
        </ShippingCartProvider>
      </ProductsProvider>

    </>
  )
}

export default GeneralSkin