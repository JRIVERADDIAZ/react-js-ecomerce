import React, { useState, createContext } from 'react'
import { Producthelper } from '../helpers/Producthelperfind';

const ShippingCartContext = createContext()

const initialQuanity = { quanity: 0 }

const cartProductContainer = []

const ShippingCartProvider = ({ children }) => {

  const [cartContainCounter, setcartContainCounter] = useState(initialQuanity) // global cart counter

  const [cartProductsContainer, setCartProductsContainer] = useState(cartProductContainer)// global cart to complete the purchase 


  const addToTheCartCounter = () => {// function that allows to increase the global cart counter
    setcartContainCounter({
      quanity: cartContainCounter.quanity + 1
    }
    )
  }

  const removeFromCartCounter = () => {// function that allows to decrease the global cart counter
    setcartContainCounter({
      quanity: cartContainCounter.quanity - 1
    }
    )
  }

  const addToTheCart = (id, stock) => { // funnction than allows to increase the quanity on the cart selected on the store screen and show single screen

    let product = Producthelper(id) //refactorizar este en helper para devolver el producto ya filtrado en el estado cartProductsContainer
    let productData = product[0]

    const productSelectedOnTheCart = cartProductsContainer.every(product => {
      return product.id !== id
    }
    )

    if (productSelectedOnTheCart) {
      setCartProductsContainer(
        [
          ...cartProductsContainer,
          productData
        ]
      )
      addToTheCartCounter()

    } else {
      const productStockAvailable = cartProductsContainer.every(product => {
        return product.cantidad !== stock
      }
      )

      if (productStockAvailable) {
        cartProductsContainer.find((producto) => producto.id === id).cantidad += 1
        addToTheCartCounter()

      }
    }
  }

  const decreaseQuantityToPurchase = (id) => { // funnction than allows to decrease the quanity on the cart selected on the store screen and show single screen

    let product = Producthelper(id)
    let productData = product[0]

    const productIsNotEnoughtToBeOnCart = cartProductsContainer.find(product => {
      return product.cantidad === 1
    }
    )

    if (!productIsNotEnoughtToBeOnCart) {
      cartProductsContainer.find((products) => products.id === productData.id).cantidad -= 1
      removeFromCartCounter()
    } else if (productIsNotEnoughtToBeOnCart) {
      setCartProductsContainer(cartProductsContainer.filter((products) => products.id !== productData.id))
      removeFromCartCounter() 
    }
  }

  const constRemoveItemFromTheCart = (itemId) => { // function that allows to remove the item from the cart and rest the quanity reoved on the cart counter
    const { id } = itemId
    let product = Producthelper(id)
    let productData = product[0]
    let newProductCartcontain = cartProductsContainer.filter((products) => products.id !== productData.id)
 
    setCartProductsContainer(newProductCartcontain)
    setcartContainCounter(  { quanity: cartContainCounter.quanity - productData.cantidad } )
  }

  const totalAmountToPayPeerItem = ( itemId ) => { // function that allows to calculate the total amount to pay per item
    const { id } = itemId
    let product =  cartProductsContainer.find((product) => product.id === id)
   return product.cantidad * product.precio
  }
    
  const totalAmountToPay = ( ) => { // function that allows to calculate the total amount to pay
    let total = 0
    cartProductsContainer.map(product => (
      total += product.precio * product.cantidad
    ))
   return total
  }

  const counterData = {
    cartContainCounter,
    addToTheCartCounter,
    removeFromCartCounter,
    cartProductsContainer,
    addToTheCart,
    decreaseQuantityToPurchase,
    constRemoveItemFromTheCart,
    totalAmountToPayPeerItem,
    totalAmountToPay
  }

  return (
    <ShippingCartContext.Provider value={counterData}>
      {children}
    </ShippingCartContext.Provider>
  )
}

export { ShippingCartProvider }
export default ShippingCartContext
