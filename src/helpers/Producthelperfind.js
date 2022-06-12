import { Productos } from '../database/data'

export const Producthelper = (productid) => {
  if (productid.length === 0) {
    return 'erro helper'
  }
  return Productos.filter(producto => producto.id === productid)
}