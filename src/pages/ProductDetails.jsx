
import { Link, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { auth } from '../firebase'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import products from '../data/products'

function ProductDetails() {

const { id } = useParams()
const { addToCart } = useCart()

const product = products.find(
    (item) => item.id === Number(id)
)

const [isInWishlist, setIsInWishlist] = useState(false)
const [isAddedToCart, setIsAddedToCart] = useState(false)

const [selectedSize, setSelectedSize] = useState('')
const [selectedColor, setSelectedColor] = useState('')


// Add or Remove Wishlist

async function handleWishlist() {

    try {

        const user = auth.currentUser

        if (!user) {
            alert('Please login first')
            return
        }

        const token = await user.getIdToken()

        if (isInWishlist) {

            await axios.delete(
                `${import.meta.env.VITE_API_URL}/wishlist/remove/${product.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            setIsInWishlist(false)

        } else {

            await axios.post(
                `${import.meta.env.VITE_API_URL}/wishlist/add`,
                { productId: product.id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            setIsInWishlist(true)
        }

    } catch (error) {

        console.log('Wishlist error:', error)
        alert('Unable to update wishlist')

    }

}


// Check Whether Product Is Already in Wishlist

useEffect(() => {

    async function checkWishlist() {

        setIsInWishlist(false)

        try {

            const user = auth.currentUser

            if (!user) return

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

            setIsInWishlist(
                productIds.includes(product.id)
            )

        } catch (error) {

            console.log('Wishlist error:', error)

        }

    }

    if (product) {
        checkWishlist()
    }

}, [product?.id])


// Product Not Found

if (!product) {

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F3EF]">

            <h2 className="text-3xl font-serif text-[#382522]">
                Product Not Found
            </h2>

            <p className="text-[#8B7B76] mt-3">
                Sorry, this product is unavailable.
            </p>

        </div>
    )
}


return (

    <div className="min-h-screen bg-[#F8F3EF]">

        <Navbar />

        <section className="px-5 md:px-12 lg:px-20 py-14">

            <div className="mb-8">

                <Link
                    to="/collections"
                    className="text-sm text-[#98676A] hover:text-[#805255]"
                >
                    ← Back to Collections
                </Link>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


                {/* Product Image */}

                <div className="bg-[#F0E1DA] overflow-hidden">

                    

                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-170 object-cover"
                    />

                </div>


                {/* Product Information */}

                <div className="flex flex-col justify-center">

                    <p className="text-sm tracking-[3px] uppercase text-[#98676A]">
                        {product.category}
                    </p>

                    <h1 className="font-serif text-3xl md:text-4xl text-[#382522] mt-4">
                        {product.name}
                    </h1>

                    <p className="text-2xl text-[#805255] mt-5">
                        {product.price}
                    </p>

                    <div className="border-t border-[#E9DDD6] my-7"></div>


                    {/* Product Description */}

                    <h3 className="font-medium text-[#382522] mb-3">
                        Product Description
                    </h3>

                    <p className="text-[#8B7B76] leading-7">
                        {product.description}
                    </p>


                    {/* Size Selection */}

                    <div className="mt-8">

                        <h3 className="text-[#382522] mb-4">
                            Select Size
                        </h3>

                        <div className="flex flex-wrap gap-3">

                            {product.sizes.map((size) => (

                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`border px-5 py-2 ${
                                        selectedSize === size
                                            ? 'bg-[#98676A] text-white border-[#98676A]'
                                            : 'border-[#DCCBC3] text-[#382522]'
                                    }`}
                                >
                                    {size}
                                </button>

                            ))}

                        </div>

                    </div>


                    {/* Colour Selection */}

                    <div className="mt-8">

                        <h3 className="text-[#382522] mb-4">
                            Available Colours
                        </h3>

                        <div className="flex flex-wrap gap-3">

                            {product.colors.map((color) => (

                                <button
                                    key={color}
                                    onClick={() => setSelectedColor(color)}
                                    className={`border rounded-full px-5 py-2 text-sm ${
                                        selectedColor === color
                                            ? 'bg-[#98676A] text-white border-[#98676A]'
                                            : 'border-[#DCCBC3] text-[#382522]'
                                    }`}
                                >
                                    {color}
                                </button>

                            ))}

                        </div>

                    </div>


                    {/* Selected Options */}

                    {selectedSize && selectedColor && (

                        <p className="text-sm text-[#805255] mt-5">
                            Selected: {selectedSize} / {selectedColor}
                        </p>

                    )}


                    {/* Action Buttons */}

                    <div className="flex flex-col sm:flex-row gap-4 mt-10">

                        {/* Add to Cart */}

                        <button
                            onClick={() => {

                                addToCart(product, selectedSize, selectedColor)

                                setIsAddedToCart(true)

                            }}
                            disabled={!selectedSize || !selectedColor || isAddedToCart}
                            className="bg-[#98676A] hover:bg-[#805255] disabled:opacity-50 text-white px-7 py-3 rounded-full transition"
                        >
                            {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
                        </button>


                        {/* Add or Remove Wishlist */}

                        <button
                            onClick={handleWishlist}
                            className="border border-[#98676A] text-[#805255] hover:bg-[#F0E1DA] px-7 py-3 rounded-full transition"
                        >
                            {isInWishlist ? 'Remove' : '♡ Add to Wishlist'}
                        </button>

                    </div>


                    <p className="text-xs text-[#8B7B76] mt-5">
                        Select your preferred size and colour before adding to cart.
                    </p>

                </div>

            </div>

        </section>

        <Footer />

    </div>

)
}

export default ProductDetails
