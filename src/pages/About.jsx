
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function About() {

    return (
        <>
            <Navbar />
            <div className="bg-[#F8F3EF] min-h-screen">

                {/* Hero Section */}
                <section className="text-center py-20 px-5">

                    <p className="text-sm tracking-[4px] uppercase text-[#98676A] mb-4">
                        Discover CERO
                    </p>

                    <h1 className="text-4xl md:text-6xl font-serif text-[#382522]">
                        About Us
                    </h1>

                    <p className="text-[#8B7B76] mt-6 max-w-2xl mx-auto leading-8">
                        Where elegance meets every occasion.
                        Celebrating timeless fashion, individuality
                        and the beauty of every special moment.
                    </p>

                </section>
                {/* Our Story */}
                <section className="px-6 md:px-20 py-16 bg-[#FFFCF9]">

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="text-sm tracking-[3px] uppercase text-[#98676A] mb-4">
                            Who We Are
                        </p>

                        <h2 className="text-3xl md:text-4xl font-serif text-[#382522] mb-8">
                            Our Story
                        </h2>

                        <p className="text-[#8B7B76] leading-8">
                            At CERO, we believe every outfit has a story,
                            and every woman deserves to feel beautiful in hers.

                            CERO Bridal Couture is a celebration of Indian
                            fashion, timeless elegance and individuality.
                            Our collections bring together traditional
                            influences and contemporary designs, creating
                            beautiful outfits for life's most cherished occasions.
                        </p>
                    </div>
                </section>
                {/* Our Philosophy */}
                <section className="px-6 md:px-20 py-20">

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="text-sm tracking-[3px] uppercase text-[#98676A] mb-4">
                            What We Believe
                        </p>

                        <h2 className="text-3xl md:text-4xl font-serif text-[#382522] mb-6">
                            Our Philosophy
                        </h2>

                        <h3 className="text-xl font-serif text-[#805255] mb-5">
                            Beauty Lies in the Details.
                        </h3>

                        <p className="text-[#8B7B76] leading-8">
                            We believe true elegance is not about following
                            trends, but about finding a style that feels
                            uniquely yours. From beautiful fabrics to
                            thoughtful detailing, every element matters.

                            Whether you love traditional elegance or modern
                            sophistication, CERO brings you styles that
                            celebrate your individuality.
                        </p>
                    </div>
                </section>
                {/* Special Moments */}
                <section className="px-6 md:px-20 py-16 bg-[#FFFCF9]">

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="text-sm tracking-[3px] uppercase text-[#98676A] mb-4">
                            Celebrate Every Moment
                        </p>

                        <h2 className="text-3xl md:text-4xl font-serif text-[#382522] mb-8">
                            Made for Your Special Moments
                        </h2>

                        <p className="text-[#8B7B76] leading-8">
                            Every celebration deserves something special.
                            From engagements and weddings to receptions
                            and festive gatherings, CERO brings you outfits
                            for every beautiful chapter of your journey.

                            With customization options, we also aim to
                            make your couture experience more personal.
                        </p>

                    </div>

                </section>
                {/* CERO Promise */}
                <section className="text-center px-6 py-20">

                    <p className="text-sm tracking-[3px] uppercase text-[#98676A] mb-4">
                        The CERO Promise
                    </p>

                    <h2 className="text-3xl md:text-5xl font-serif text-[#382522] mb-6">
                        Crafted for Moments That Matter.
                    </h2>

                    <p className="text-[#8B7B76] max-w-xl mx-auto leading-8 mb-8">
                        Thoughtfully curated designs, beautiful styles
                        and an elegant shopping experience for your
                        most memorable occasions.
                    </p>

                    <Link
                        to="/collections"
                        className="inline-block bg-[#98676A] text-white px-8 py-3 hover:bg-[#805255] transition"
                    >
                        Explore Collections
                    </Link>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default About
