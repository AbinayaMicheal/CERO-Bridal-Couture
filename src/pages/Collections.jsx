import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { auth } from '../firebase'
import products from '../data/products'
import Navbar from '../components/Navbar'

function Collections() {
    const [searchParams, setSearchParams] = useSearchParams()

    const [wishlistIds, setWishlistIds] = useState([])

    const [showFilters, setShowFilters] = useState(false)

    // Filter states
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(50000)
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([])

    // Get available colors and sizes from products
    const availableColors = [...new Set(
        products.flatMap(product => product.colors || [])
    )]

    const availableSizes = [...new Set(
        products.flatMap(product => product.sizes || [])
    )]

    useEffect(() => {

        async function getWishlist() {

            try {
                const user = auth.currentUser
                if (!user) return
                const token = await user.getIdToken()
                const response = await axios.get(
                    '${import.meta.env.VITE_API_URL}/wishlist',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                setWishlistIds(response.data.productIds || [])

            } catch (error) {
                console.log('Wishlist error:', error)
            }

        }

        getWishlist()

    }, [])

    async function handleWishlist(productId) {

        try {
            const user = auth.currentUser

            if (!user) {
                alert('Please login first')
                return
            }
            const token = await user.getIdToken()

            if (wishlistIds.includes(productId)) {

                await axios.delete(
                    `${import.meta.env.VITE_API_URL}/wishlist/remove/${productId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                setWishlistIds(wishlistIds.filter(id => id !== productId))

            } else {

                await axios.post(
                    '${import.meta.env.VITE_API_URL}/wishlist/add',
                    { productId },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                setWishlistIds([...wishlistIds, productId])

            }

        } catch (error) {
            console.log('Wishlist update error:', error)
            alert('Unable to update wishlist')
        }

    }

    const category = searchParams.get('category') || 'All'
    const occasion = searchParams.get('occasion') || 'All'

    const categories = [
        'All',
        'Bridal Lehenga',
        'Sarees',
        'Sharara',
        'Gowns',
        'Anarkali',
        'Indo-Western'
    ]

    // Handle color selection
    function handleColorChange(color) {

        if (selectedColors.includes(color)) {
            setSelectedColors(
                selectedColors.filter(item => item !== color)
            )
        } else {
            setSelectedColors([...selectedColors, color])
        }

    }

    // Handle size selection
    function handleSizeChange(size) {

        if (selectedSizes.includes(size)) {
            setSelectedSizes(
                selectedSizes.filter(item => item !== size)
            )
        } else {
            setSelectedSizes([...selectedSizes, size])
        }

    }

    // Clear all filters
    function clearFilters() {

        setMinPrice(0)
        setMaxPrice(50000)
        setSelectedColors([])
        setSelectedSizes([])

    }

    // Category filter
    function handleCategoryChange(selectedCategory) {

        const params = new URLSearchParams(searchParams)

        if (selectedCategory === 'All') {
            params.delete('category')
        } else {
            params.set('category', selectedCategory)
        }

        setSearchParams(params)

    }

    // Filter products
    const filteredProducts = products.filter((product) => {

        const categoryMatch = category === 'All' ||
            product.category === category

        const occasionMatch = occasion === 'All' ||
            (product.occasion || []).includes(occasion)

        const productPrice = Number(
            product.price.replace(/[₹,]/g, '')
        )

        const priceMatch =
            productPrice >= minPrice &&
            productPrice <= maxPrice

        const colorMatch =
            selectedColors.length === 0 ||
            (product.colors || []).some(color =>
                selectedColors.includes(color)
            )

        const sizeMatch =
            selectedSizes.length === 0 ||
            (product.sizes || []).some(size =>
                selectedSizes.includes(size)
            )

        return categoryMatch &&
            occasionMatch &&
            priceMatch &&
            colorMatch &&
            sizeMatch

    })

    return (
        <>
<Navbar />

<div className="min-h-screen bg-[#F8F3EF]">

{/* Heading */}
<section className="text-center py-14 px-5">

    <p className="text-sm tracking-[4px] text-[#98676A] uppercase mb-3">
        Discover Your Perfect Look
    </p>

    <h1 className="text-4xl md:text-5xl font-serif text-[#382522]">
        {occasion !== 'All' ? occasion : 'Our Collections'}
    </h1>

    <p className="text-[#8B7B76] mt-4 max-w-xl mx-auto">
        Explore thoughtfully crafted ensembles that celebrate
        every beautiful moment of your journey.
    </p>

</section>

{/* Category Filters */}
<section className="px-5 md:px-12">

    <div className="flex flex-wrap justify-center gap-4 mb-10">

        {categories.map((item) => (

            <button
                key={item}
                onClick={() => handleCategoryChange(item)}
                className={`px-6 py-2 border rounded-full text-sm transition ${category === item
                    ? 'bg-[#98676A] text-white border-[#98676A]'
                    : 'border-[#DCCBC3] text-[#382522] hover:bg-[#F0E1DA]'
                    }`}
            >
                {item}
            </button>

        ))}

    </div>

</section>

{/* Filters and Products */}
<section className="px-5 md:px-12 pb-20">

    <div className="relative grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-6 md:gap-10">
        {/* Left Filter Sidebar */}
        <aside className={`${showFilters ? 'block' : 'hidden'} md:block absolute md:static top-0 left-0 z-40 w-70 md:w-auto bg-[#FFFCF9] p-6 h-fit border border-[#E9DDD6] shadow-xl md:shadow-none`}>
            <div className="flex justify-between items-center mb-6">

                <h2 className="text-lg font-serif text-[#382522]">
                    Filters
                </h2>

                <div className="flex items-center gap-3">

                    <button
                        onClick={clearFilters}
                        className="text-xs text-[#98676A] underline"
                    >
                        Clear All
                    </button>

                    <button
                        onClick={() => setShowFilters(false)}
                        className="md:hidden text-sm text-[#382522]"
                    >
                        Close
                    </button>

                </div>

            </div>

            {/* Price Filter */}
            <div className="border-t border-[#E9DDD6] py-5">

                <h3 className="font-medium text-[#382522] mb-4">
                    Price Range
                </h3>

                <div className="flex gap-3">

                    <div>
                        <label className="text-xs text-[#8B7B76]">
                            Minimum
                        </label>

                        <input
                            type="number"
                            value={minPrice}
                            min="0"
                            max="50000"
                            onChange={(e) => setMinPrice(
                                Math.max(0, Math.min(Number(e.target.value), maxPrice))
                            )}
                            className="w-full border border-[#DCCBC3] p-2 mt-1 text-sm bg-white"
                        />
                    </div>

                    <div>
                        <label className="text-xs text-[#8B7B76]">
                            Maximum
                        </label>

                        <input
                            type="number"
                            value={maxPrice}
                            min="0"
                            max="50000"
                            onChange={(e) => setMaxPrice(
                                Math.max(minPrice, Math.min(Number(e.target.value), 50000))
                            )}
                            className="w-full border border-[#DCCBC3] p-2 mt-1 text-sm bg-white"
                        />
                    </div>

                </div>

            </div>

            {/* Color Filter */}
            <div className="border-t border-[#E9DDD6] py-5">

                <h3 className="font-medium text-[#382522] mb-4">
                    Color
                </h3>

                <div className="flex flex-col gap-3">

                    {availableColors.map((color) => (

                <label
                    key={color}
                    className="flex items-center gap-3 text-sm text-[#805255] cursor-pointer"
                >
                    <input
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() => handleColorChange(color)}
                        className="accent-[#98676A]"
                    />

                    {color}

                </label>

            ))}

        </div>

    </div>

    {/* Size Filter */}
    <div className="border-t border-[#E9DDD6] py-5">

        <h3 className="font-medium text-[#382522] mb-4">
            Size
        </h3>

        <div className="flex flex-col gap-3">

            {availableSizes.map((size) => (

                <label
                    key={size}
                    className="flex items-center gap-3 text-sm text-[#805255] cursor-pointer"
                >
                    <input
                        type="checkbox"
                        checked={selectedSizes.includes(size)}
                        onChange={() => handleSizeChange(size)}
                        className="accent-[#98676A]"
                    />
                    {size}
                </label>
            ))}

        </div>

    </div>

</aside>

{/* Right Product Section */}
<div>
    <div className="flex items-center justify-between mb-5 md:hidden">

        <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 border border-[#DCCBC3] px-4 py-2 text-sm text-[#382522] bg-[#FFFCF9]"
        >

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 4.5h18M6 9h12m-9 4.5h6m-4.5 4.5h3"
                />
            </svg>

            Filters

        </button>

    </div>

    <p className="text-sm text-[#8B7B76] mb-6">
        Showing {filteredProducts.length} products
        {category !== 'All' && ` in ${category}`}
        {occasion !== 'All' && ` for ${occasion}`}
    </p>

    {filteredProducts.length === 0 && (

        <div className="text-center py-20">
            <h2 className="text-2xl font-serif text-[#382522]">
                No Products Found
            </h2>

            <p className="text-[#8B7B76] mt-3">
                Try changing your filters to see more designs.
            </p>

            <button
                onClick={clearFilters}
                className="mt-5 text-[#98676A] underline"
            >
                Clear Filters
            </button>

        </div>

    )}

    {/* 3 Cards Per Row on Desktop */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

        {filteredProducts.map((product) => (

            <div key={product.id} className="group">

                <div className="relative overflow-hidden bg-[#F0E1DA]">

                    <Link to={`/product/${product.id}`}>

                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-95 object-cover group-hover:scale-105 transition duration-500"
                        />

                    </Link>

                    <button
                        onClick={() => handleWishlist(product.id)}
                        className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 text-xl text-[#98676A]"
                    >
                        {wishlistIds.includes(product.id) ? '♥' : '♡'}
                    </button>

                </div>

                <Link to={`/product/${product.id}`}>

                    <div className="pt-4">

                        <p className="text-xs uppercase tracking-widest text-[#98676A]">
                            {product.category}
                        </p>

                        <h3 className="text-lg font-serif text-[#382522] mt-2">
                            {product.name}
                        </h3>

                        <p className="text-sm text-[#805255] mt-2">
                            {product.price}
                        </p>
                    </div>
                </Link>
            </div>
        ))}
    </div>
</div>
</div>
</section>
</div>
</>
    )
}

export default Collections
