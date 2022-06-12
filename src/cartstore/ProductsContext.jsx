
import React, { useState, createContext } from 'react'
import { useGetInfo } from '../hooks/useGetInfo'

const DataContext = createContext()


const ProductsProvider = ({ children }) => {
    
    const { productos } = useGetInfo(DataContext)
    const [data, setData] = useState(productos)

    const info = { data, setData }

    return (
        <DataContext.Provider value={info}>
            {children}
        </DataContext.Provider>
    )
}

export { ProductsProvider }
export default DataContext