import React from 'react'

import './sidebar.css'
import '../navbar/NavBar.css'
import { CompraSideBar } from './CompraSideBar'


const Sidebar = ({ sideBar }) => {

    return (
        <>
            {
                sideBar ?
                    <div className={"active-sidebar"} >
                        <CompraSideBar   />
                    </div>
                    :
                    <div className={"inactive-sidebar"}></div>
            }
        </>
    )
}

export default Sidebar