import React,{ useState } from 'react'

import Sidebar from '../sidebar/Sidebar'

const cart = require('../images/carrito.png')

export const CartIcon = () => {

    const [sideBar, setSideBar] = useState(false)

    const showSidebar = (e) => {
        (e).preventDefault()
        setSideBar(!sideBar)
    }

  return (
      
    <>
    <img className='menu-icon' src={cart} alt='carrito' onClick={showSidebar} />
    <Sidebar
                    sideBar={sideBar}
                    setSideBar={setSideBar}
                />
    </>
  )
}