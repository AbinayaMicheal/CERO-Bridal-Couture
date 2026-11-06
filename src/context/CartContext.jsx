import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

const CartContext = createContext()

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState([])
    const [userId, setUserId] = useState(null)
    const [cartLoaded, setCartLoaded] = useState(false)

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                const savedCart = localStorage.getItem(`cart_${user.uid}`)

                setCartItems(savedCart ? JSON.parse(savedCart) : [])
                setUserId(user.uid)
                setCartLoaded(true)
            } else {
                setCartItems([])
                setUserId(null)
                setCartLoaded(false)
            }

        })

        return () => unsubscribe()

    }, [])

    useEffect(() => {

        if (userId && cartLoaded) {
            localStorage.setItem(`cart_${userId}`, JSON.stringify(cartItems))
        }

    }, [cartItems, userId, cartLoaded])

    function addToCart(product, size, color) {

        const existingItem = cartItems.find(item =>
            item.id === product.id &&
            item.size === size &&
            item.color === color
        )

        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === product.id &&
                    item.size === size &&
                    item.color === color
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ))
        } else {
            setCartItems([
                ...cartItems,
                {
                    ...product,
                    size,
                    color,
                    quantity: 1
                }
            ])
        }
    }

    function removeFromCart(id, size, color) {
        setCartItems(cartItems.filter(item =>
            !(item.id === id && item.size === size && item.color === color)
        ))
    }

    function updateQuantity(id, size, color, quantity) {

        if (quantity < 1) return

        setCartItems(cartItems.map(item =>
            item.id === id &&
                item.size === size &&
                item.color === color
                ? { ...item, quantity }
                : item
        ))
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}