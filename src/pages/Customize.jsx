
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Customize() {
return (
    <>
        <Navbar />

        <div className="min-h-screen bg-[#F8F3EF] text-[#382522]">

            {/* Hero Section */}
            <section className="text-center px-5 sm:px-6 py-14 sm:py-20">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#805255] mb-4">
                    Customize Your Dream Dress
                </h1>

                <p className="text-lg sm:text-xl text-[#8B7B76] mb-6">
                    Your vision. Your style. Your dress.
                </p>

                <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#382522] leading-7">
                    Tell us your preferences and measurements. Our designer will
                    discuss your ideas with you, create your custom design, and
                    deliver it to your doorstep.
                </p>

            </section>


            {/* How It Works */}
            <section className="px-5 sm:px-8 pb-14 sm:pb-20">

                <h2 className="text-2xl sm:text-3xl text-center font-serif text-[#805255] mb-10 sm:mb-12">
                    How It Works
                </h2>

                {/* Six Steps */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 sm:gap-6">

                    {/* Step 1 */}
                    <div className="text-center border border-gray-300 p-3">
                        <div className="text-3xl font-serif text-[#98676A] mb-3 ">
                            01
                        </div>

                        <h3 className="font-semibold text-[#382522] mb-2">
                            Choose Your Fabric
                        </h3>

                        <p className="text-sm text-[#8B7B76] leading-6">
                            Select the fabric that suits your dream dress.
                        </p>
                    </div>


                    {/* Step 2 */}
                    <div className="text-center border border-gray-300 p-3">
                        <div className="text-3xl font-serif text-[#98676A] mb-3">
                            02
                        </div>

                        <h3 className="font-semibold text-[#382522] mb-2">
                            Choose Your Colour
                        </h3>

                        <p className="text-sm text-[#8B7B76] leading-6">
                            Pick your preferred colour or share your own colour idea.
                        </p>
                    </div>


                    {/* Step 3 */}
                    <div className="text-center  border border-gray-300 p-3">
                        <div className="text-3xl font-serif text-[#98676A] mb-3">
                            03
                        </div>

                        <h3 className="font-semibold text-[#382522] mb-2">
                            Share Your Measurements
                        </h3>

                        <p className="text-sm text-[#8B7B76] leading-6">
                            Provide your measurements for a personalized fit.
                        </p>
                    </div>


                    {/* Step 4 */}
                    <div className="text-center  border border-gray-300 p-3">
                        <div className="text-3xl font-serif text-[#98676A] mb-3">
                            04
                        </div>

                        <h3 className="font-semibold text-[#382522] mb-2">
                            Share Your Design
                        </h3>

                        <p className="text-sm text-[#8B7B76] leading-6">
                            Tell us about your preferred style, neckline, sleeves,
                            embroidery, and other details.
                        </p>
                    </div>


                    {/* Step 5 */}
                    <div className="text-center  border border-gray-300 p-3">
                        <div className="text-3xl font-serif text-[#98676A] mb-3">
                            05
                        </div>

                        <h3 className="font-semibold text-[#382522] mb-2">
                            Designer Creates Your Dress
                        </h3>

                        <p className="text-sm text-[#8B7B76] leading-6">
                            Our designer brings your ideas together and creates
                            your custom dress.
                        </p>
                    </div>


                    {/* Step 6 */}
                    <div className="text-center  border border-gray-300 p-3">
                        <div className="text-3xl font-serif text-[#98676A] mb-3">
                            06
                        </div>

                        <h3 className="font-semibold text-[#382522] mb-2">
                            Doorstep Delivery
                        </h3>

                        <p className="text-sm text-[#8B7B76] leading-6">
                            Your finished custom dress is carefully delivered
                            to your doorstep.
                        </p>
                    </div>

                </div>

            </section>


            {/* Final CTA */}
            <section className="text-center bg-[#F0E1DA] px-5 sm:px-6 py-12 sm:py-16">

                <h2 className="text-2xl sm:text-3xl font-serif text-[#805255] mb-4">
                    From Your Idea to Your Dream Dress
                </h2>

                <p className="text-sm sm:text-base text-[#382522] mb-8 leading-7">
                    Choose your preferences → Talk to our designer →
                    Finalize your design → Get it delivered
                </p>

                <Link
                    to="/Contact"
                    className="inline-block bg-[#98676A] hover:bg-[#805255] text-white px-8 py-3 rounded-md transition"
                >
                    Book a Call
                </Link>

                <p className="text-sm text-[#8B7B76] mt-4">
                    Our designer will connect with you and guide you through the process.
                </p>

            </section>

        </div>

        <Footer />
    </>
)
}

export default Customize
