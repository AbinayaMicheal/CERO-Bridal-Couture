import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { useState } from 'react'
function Cart() {

    const { cartItems, removeFromCart, updateQuantity } = useCart()

    const [paymentMethod, setPaymentMethod] = useState('UPI')
    const [orderMessage, setOrderMessage] = useState('')

    const mrp = cartItems.reduce((sum, item) => {
        return sum + Number(item.price.replace(/[₹,]/g, '')) * item.quantity
    }, 0)

    const deliveryFee = 99
    const discount = 0

    const total = mrp + deliveryFee - discount

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-[#F8F3EF] px-6 md:px-12 py-12">

                <h1 className="text-3xl font-serif text-[#382522] mb-8">
                    My Shopping Cart
                </h1>

                {cartItems.length === 0 ? (

                    <p className="text-[#8B7B76]">
                        Your cart is empty.
                    </p>

                ) : (

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        <div className="lg:col-span-2 space-y-6">

                            {cartItems.map((item) => (

                                <div
                                    key={`${item.id}-${item.size}-${item.color}`}
                                    className="bg-[#FFFCF9] p-5 flex flex-col sm:flex-row gap-6"
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full sm:w-36 h-44 object-cover"
                                    />

                                    <div className="flex-1">

                                        <h2 className="text-lg text-[#382522]">
                                            {item.name}
                                        </h2>

                                        <p className="text-[#805255] mt-2">
                                            {item.price}
                                        </p>

                                        <p className="text-sm text-[#8B7B76] mt-2">
                                            Size: {item.size}
                                        </p>

                                        <p className="text-sm text-[#8B7B76]">
                                            Colour: {item.color}
                                        </p>

                                        <div className="flex items-center gap-4 mt-4">

                                            <button
                                                onClick={() => updateQuantity(
                                                    item.id,
                                                    item.size,
                                                    item.color,
                                                    item.quantity - 1
                                                )}
                                                className="border px-3 py-1"
                                            >
                                                −
                                            </button>

                                            <span>{item.quantity}</span>

                                            <button
                                                onClick={() => updateQuantity(
                                                    item.id,
                                                    item.size,
                                                    item.color,
                                                    item.quantity + 1
                                                )}
                                                className="border px-3 py-1"
                                            >
                                                +
                                            </button>

                                        </div>

                                        <button
                                            onClick={() => removeFromCart(
                                                item.id,
                                                item.size,
                                                item.color
                                            )}
                                            className="text-sm text-[#98676A] underline mt-4"
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>


                        <div className="bg-[#FFFCF9] p-6 h-fit">

                            <h2 className="text-xl font-serif text-[#382522] mb-6">
                                Order Summary
                            </h2>

                            {/* Price Details */}

                            <div className="space-y-4 border-b border-[#E9DDD6] pb-5">

                                <div className="flex justify-between">
                                    <span className="text-[#8B7B76]">MRP</span>
                                    <span>₹{mrp.toLocaleString('en-IN')}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-[#8B7B76]">Delivery Fee</span>
                                    <span>₹{deliveryFee}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-[#8B7B76]">Discount</span>
                                    <span className="text-green-700">
                                        -₹{discount}
                                    </span>
                                </div>

                            </div>

                            {/* Total */}

                            <div className="flex justify-between py-5">
                                <span className="font-medium text-[#382522]">
                                    Total Amount
                                </span>

                                <span className="text-lg font-semibold text-[#805255]">
                                    ₹{total.toLocaleString('en-IN')}
                                </span>
                            </div>

                            {/* Payment Method */}

                            <div className="border-t border-[#E9DDD6] pt-5">

                                <h3 className="text-lg font-serif text-[#382522] mb-4">
                                    Select Payment Method
                                </h3>

                                <div className="space-y-3">

                                    {['UPI', 'Credit / Debit Card', 'Net Banking', 'Cash on Delivery'].map((method) => (

                                        <label
                                            key={method}
                                            className="flex items-center gap-3 text-sm text-[#805255] cursor-pointer">
                                            <input
                                                type="radio"
                                                name="payment"
                                                value={method}
                                                checked={paymentMethod === method}
                                                onChange={() => setPaymentMethod(method)}
                                                className="accent-[#98676A]"/> {method}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            {/* Place Order */}
                            <button
                                onClick={() => setOrderMessage('show')}
                                className="w-full bg-[#98676A] hover:bg-[#805255] text-white py-3 mt-7 transition"
                            >
                                Place Order
                            </button>

                            {/* Success Popup */}

                            {orderMessage === 'show' && (

                                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

                                    <div className="bg-[#FFFCF9] p-8 text-center w-[90%] max-w-sm shadow-xl">

                                        <div className="text-4xl text-green-600 mb-4">
                                            ✓
                                        </div>

                                        <h2 className="text-xl font-serif text-[#382522] mb-3">
                                            Order Placed Successfully!
                                        </h2>

                                        <p className="text-sm text-[#8B7B76] mb-6">
                                            Thank you for shopping with CERO Bridal Couture.
                                        </p>

                                        <button
                                            onClick={() => setOrderMessage('')}
                                            className="bg-[#98676A] hover:bg-[#805255] text-white px-10 py-2"
                                        >
                                            OK
                                        </button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                )}
            </div>
            <Footer />
        </>
    )
}

export default Cart