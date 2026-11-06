import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import products from '../data/products'
import Navbar from '../components/Navbar'

function Wishlist() {

const [wishlistProducts, setWishlistProducts] = useState([])

useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {

        if (user) {
            try {
                const token = await user.getIdToken()

                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/wishlist`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                const productIds = response.data.productIds || []

                const savedProducts = products.filter(product =>
                    productIds.includes(product.id)
                )

                setWishlistProducts(savedProducts)

            } catch (error) {
                console.log('Wishlist error:', error)
            }
        }

    })

    return () => unsubscribe()

}, [])

return (
    <>
        <Navbar />

        <div className="min-h-screen bg-[#F8F3EF] px-6 md:px-12 py-12">

            <h1 className="text-3xl font-serif text-[#382522] mb-2">
                My Wishlist
            </h1>

            <p className="text-[#8B7B76] mb-10">
                Your favourite bridal collections, all in one place.
            </p>

            {wishlistProducts.length === 0 ? (

                <p className="text-[#8B7B76]">
                    Your wishlist is empty.
                </p>

            ) : (

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {wishlistProducts.map((product) => (

                        <div key={product.id} className="bg-[#FFFCF9]">

                            <Link to={`/product/${product.id}`}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-137.5 object-cover"
                                />
                            </Link>

                            <div className="p-5">

                                <p className="text-sm text-[#98676A]">
                                    {product.category}
                                </p>

                                <h2 className="text-lg text-[#382522] mt-2">
                                    {product.name}
                                </h2>

                                <p className="text-[#805255] mt-2">
                                    {product.price}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    </>
)
}

export default Wishlist