import { createContext, useState } from "react";
import { encryptPayload } from "../utils/enc";

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState(() => !!sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : [])

    const addToCart = product => {
        let sessionCart = JSON.parse(sessionStorage.getItem('cart')) || []

        const filtered = sessionCart.filter(item => item.id === product.id)
        if (filtered.length > 0) {
            alert('item already added')
            return
        }
        const encryptedProduct = encryptPayload(product.id.toString(), product.attributes)
        sessionStorage.setItem('cart', JSON.stringify([...sessionCart, { id: product.id, product: encryptedProduct, qty: 1 }]))
        getCart()
    }

    const getCart = () => {
        const c_art = sessionStorage.getItem('cart') || sessionStorage.setItem('cart', JSON.stringify([]))
        setCart(JSON.parse(c_art))
    }

    const removeFromCart = prod_id => {
        let sessionCart = JSON.parse(sessionStorage.getItem('cart')) || []
        const filtered = sessionCart.filter(item => item.id !== prod_id)
        sessionStorage.setItem('cart', JSON.stringify(filtered))
        getCart()
    }

    return (
        <CartContext.Provider value={{ addToCart, cart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider