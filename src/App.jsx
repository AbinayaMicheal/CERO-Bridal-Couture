import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Profile from './pages/Profile'
import Wishlist from './pages/Wishlist'
import { CartProvider } from './context/CartContext'
import OccasionWearPage from './pages/OccasionWearPage'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Customize from './pages/Customize'
import ScrollToTop from './ScrollToTop'

import Collections from './pages/Collections'

function App() {
    return (
         <CartProvider>
        <BrowserRouter>
        <ScrollToTop/>
            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Collections" element={<Collections/>}></Route>
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/occasion-wear" element={<OccasionWearPage />} />
                <Route path="/customize" element={<Customize />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />

            </Routes>
        </BrowserRouter>
        </CartProvider>
    )
}

export default App