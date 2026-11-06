import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useCart } from '../context/CartContext'

function Navbar() {

    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)

    const { cartItems } = useCart()

    const cartCount = cartItems.reduce((total, item) => {
        return total + item.quantity
    }, 0)

    async function handleLogout() {
        try {
            await signOut(auth)
            navigate('/')
        } catch (error) {
            console.log('Logout failed:', error.message)
        }
    }

    function closeMenu() {
        setMenuOpen(false)
    }

    return (
        <nav className="relative z-50 bg-[#FFFCF9] border-b border-[#E9DDD6] px-5 md:px-10 py-5">
            <div className="relative flex justify-between items-center">

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-[#382522] text-2xl"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

                {/* Logo */}
                <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                    <Link to="/Home" onClick={closeMenu}>
                        <h1 className="font-serif text-3xl font-semibold text-[#382522]">
                            CERO
                        </h1>

                        <p className="text-xs text-[#8B7B76] tracking-widest">
                            BRIDAL COUTURE
                        </p>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">

                    <Link to="/Home"
                        className="text-[#382522] hover:text-[#98676A]"
                    >
                        Home
                    </Link>

                    <Link
                        to="/collections"
                        className="text-[#382522] hover:text-[#98676A]"
                    >
                        Collections
                    </Link>

                    <Link
                        to="/occasion-wear"
                        className="text-[#382522] hover:text-[#98676A]"
                    >
                        Occasion Wear
                    </Link>

                    <Link to="/customize" className="text-[#382522] hover:text-[#98676A]">
                        Customize
                    </Link>

                    <Link to="/about" className="text-[#382522] hover:text-[#98676A]">
                        About
                    </Link>

                    <Link to="/contact" className="text-[#382522] hover:text-[#98676A]">
                        Contact
                    </Link>
                </div>

                {/* Desktop Wishlist, Cart and Profile */}
                <div className="hidden md:flex justify-between items-center gap-8">

                    <Link to="/wishlist" className="text-[#382522] hover:text-[#98676A]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </Link>

                    <Link
                        to="/cart"
                        className="relative text-[#382522] hover:text-[#98676A]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#98676A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    <button
                        onClick={() => navigate('/profile')}
                        className="text-[#382522] hover:text-[#98676A]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </button>

                </div>

            </div>

            {/* Mobile Navigation Menu */}
            {menuOpen && (

                <div className="md:hidden absolute top-full left-0 w-full z-F100 bg-[#FFFCF9] border border-[#E9DDD6] shadow-xl px-6 py-6 flex flex-col gap-5">
                    <Link to="/Home" onClick={closeMenu}
                        className="text-[#382522] hover:text-[#98676A]">
                        Home
                    </Link>

                    <Link to="/collections" onClick={closeMenu}
                        className="text-[#382522] hover:text-[#98676A]">
                        Collections
                    </Link>

                    <Link to="/occasion-wear" onClick={closeMenu}
                        className="text-[#382522] hover:text-[#98676A]">
                        Occasion Wear
                    </Link>

                    <Link to="/customize" onClick={closeMenu}
                        className="text-[#382522] hover:text-[#98676A]">
                        Customize
                    </Link>

                    <a href="#" onClick={closeMenu}
                        className="text-[#382522] hover:text-[#98676A]">
                        About
                    </a>

                    <a href="#" onClick={closeMenu}
                        className="text-[#382522] hover:text-[#98676A]">
                        Contact
                    </a>

                    <div className="border-t border-[#E9DDD6] pt-5 flex flex-col gap-5">

                        <Link to="/wishlist" onClick={closeMenu}
                            className="text-[#382522] hover:text-[#98676A]">
                            Wishlist
                        </Link>

                        <Link to="/cart" onClick={closeMenu}
                            className="text-[#382522] hover:text-[#98676A] flex items-center gap-2">
                            Cart

                            {cartCount > 0 && (
                                <span className="bg-[#98676A] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        <button
                            onClick={() => {
                                closeMenu()
                                navigate('/profile')
                            }}
                            className="text-left text-[#382522] hover:text-[#98676A]">
                            Profile
                        </button>

                    </div>

                </div>
            )}
        </nav>
    )
}

export default Navbar
