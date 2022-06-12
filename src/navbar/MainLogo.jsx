import React from 'react'

const logo = require('../images/logo.jpg')

export const MainLogo = () => {

  return (

    <>
       <div>
                <img className='main-logo' src={logo} alt='logo' />
            </div>
    </>
  
  )
}