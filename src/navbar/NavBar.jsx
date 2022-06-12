import React from 'react'

import { NavLink } from 'react-router-dom'
import { CartcontainCounter } from './CartcontainCounter'
import { Searchbar } from './Searchbar'
import { CartIcon } from './CartIcon'
import { MainLogo } from './MainLogo'
import './NavBar.css'

const NavBar = () => {
        return (
       
        <>
            <div> My Store </div>
            <MainLogo />
            <nav>
                <NavLink to={'/'} > Home </NavLink>
                <NavLink to={'About'}> About </NavLink>
                <NavLink to={'Contact'}> Contact </NavLink>
                <NavLink to={'Store'}> Store </NavLink>
                <CartIcon />
                <CartcontainCounter />
                <Searchbar />
            </nav>
        </>

    )
}

export default NavBar