import React, { useContext } from 'react'

import DataContext from '../cartstore/ProductsContext'

import Cards from './Cards'
import '../store/Card_style.css'


const PintarDatos = () => {

  const { data } = useContext(DataContext)

  return (<>

    {
      data.map(product => (
        <Cards
          key={product.id}
          {...product}
        />
      )
      )
    }
    
  </>
  )

}

export default PintarDatos