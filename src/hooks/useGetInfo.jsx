import {useEffect, useState} from 'react'
import { Productos } from '../database/data'

export const useGetInfo = () => {

    const [productos, setProductos] = useState(Productos)

    useEffect(() =>{
    getData()
}, [])

    const getData = () => {
        setProductos(Productos)
    }

    return { productos }
    
}

