
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {

const [name, setName] = useState('')
const [number, setNumber] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [submitted, setSubmitted] = useState(false)

function handleSubmit(e) {
e.preventDefault()

setSubmitted(true)

setName('')
setEmail('')
setMessage('')
}

return (
<>
    <Navbar />

    <div className="min-h-screen bg-[#F8F3EF] py-16 px-5">

        {/* Heading */}
        <div className="text-center mb-12">

            <p className="text-sm tracking-[4px] uppercase text-[#98676A] mb-3">
                We'd Love to Hear From You
            </p>

            <h1 className="text-4xl md:text-5xl font-serif text-[#382522]">
                Contact Us
            </h1>

            <p className="text-[#8B7B76] mt-4">
                Have a question or need assistance? Get in touch with us.
            </p>

        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto bg-[#FFFCF9] p-8 md:p-10 shadow-sm border border-[#E9DDD6]">

            {submitted ? (

                <div className="text-center py-10">

                    <h2 className="text-2xl font-serif text-[#382522]">
                        Thank You!
                    </h2>

                    <p className="text-[#8B7B76] mt-4">
                        Your message has been submitted successfully.
                        We appreciate you reaching out to CERO.
                    </p>

                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-[#98676A] underline"
                    >
                        Send Another Message
                    </button>

                </div>

            ) : (

                <form onSubmit={handleSubmit}>

                    {/* Name */}
                    <div className="mb-6">

                        <label className="block text-sm text-[#382522] mb-2">
                            Your Name<span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                            className="w-full border border-[#DCCBC3] bg-white px-4 py-3 outline-none focus:border-[#98676A]"
                        />

                    </div>

                    {/* phone number */}
                    <div className="mb-6">

                        <label className="block text-sm text-[#382522] mb-2">
                            Phone <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="tel"

                            pattern="[6-9][0-9]{9}"
                            maxLength={10}
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="Enter your Phone number"
                            required
                            className="w-full border border-[#DCCBC3] bg-white px-4 py-3 outline-none focus:border-[#98676A]"
                        />

                    </div>

                    {/* Email */}
                    <div className="mb-6">

                        <label className="block text-sm text-[#382522] mb-2">
                            Email Address<span className="text-red-500">*</span>
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full border border-[#DCCBC3] bg-white px-4 py-3 outline-none focus:border-[#98676A]"
                        />

                    </div>

                    {/* Message */}
                    <div className="mb-8">

                        <label className="block text-sm text-[#382522] mb-2">
                            Your Message<span className="text-red-500">*</span>
                        </label>

                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="How can we help you?"
                            rows="5"
                            required
                            className="w-full border border-[#DCCBC3] bg-white px-4 py-3 outline-none focus:border-[#98676A] resize-none"
                        />

                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#98676A] text-white py-3 hover:bg-[#805255] transition"
                    >
                        Submit Message
                    </button>

                </form>

            )}

        </div>

    </div>

    <Footer />
</>
)
}

export default Contact
