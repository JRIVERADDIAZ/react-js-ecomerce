
import { Productos } from '../database/data'

export  const CardsProductHelper = (title) => {

    const validProduct = ['title']

   if(!validProduct.includes(title)) {
throw new Error(`${title} in not a valid product`) 

   }
        
    return Productos.filter(product => product.title === title)

}
