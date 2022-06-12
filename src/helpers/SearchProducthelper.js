import { Productos } from '../database/data'

export const SearchProducthelper = (productName = '') => {
  if (productName.length === 0) {
    return []
  }
  productName = productName.toLowerCase()
  return Productos.filter(producto => producto.title.toLowerCase().includes(productName))

}