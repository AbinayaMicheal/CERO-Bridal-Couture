
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import wedding from '../assets/images/wedding1.jpg'
import reception from '../assets/images/reception.jpg'
import engagement from '../assets/images/engagement.jpg'
import mehendi from '../assets/images/mehendi.jpg'
import haldi from '../assets/images/haldi.jpg'
import sangeet from '../assets/images/sangeet.jpg'
import bridesmaids from '../assets/images/bridesmaids.jpg'
import bridetobe from '../assets/images/bridetobe.jpg'
import tsaree from '../assets/images/tsaree.jpg'
import cbride from '../assets/images/cbride.jpg'

function OccasionWearPage() {

    const navigate = useNavigate()

    const occasions = [
        {
            name: 'Wedding',
            image: wedding
        },
        {
            name: 'Reception',
            image: reception
        },
        {
            name: 'Christian Bride',
            image: cbride
        },
        {
            name: 'Engagement',
            image: engagement
        },
        {
            name: 'Sangeet',
            image: sangeet
        },
        {
            name: 'Mehendi',
            image: mehendi
        },
        {
            name: 'Haldi',
            image: haldi
        },
        {
            name: 'Bride-to-Be',
            image: bridetobe
        },
        {
            name: 'Bridesmaids',
            image: bridesmaids
        },
        {
            name: 'Traditional Sarees',
            image: tsaree
        }
    ]

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-[#F8F3EF]">

                {/* Page Heading */}

                <section className="text-center py-16 px-5">

                    <p className="text-xs tracking-[4px] uppercase text-[#98676A] mb-3">
                        Celebrate Every Moment
                    </p>

                    <h1 className="text-4xl md:text-5xl font-serif text-[#382522]">
                        Occasion Wear
                    </h1>

                    <p className="text-[#8B7B76] mt-4 max-w-xl mx-auto leading-7">
                        Discover beautiful outfits for every celebration,
                        from your wedding day to the special moments in between.
                    </p>

                </section>


                {/* Occasion Cards */}

                <section className="px-5 md:px-12 lg:px-20 pb-20">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        {occasions.map((occasion) => (

                            <div
                                key={occasion.name}
                                onClick={() => navigate(`/collections?occasion=${encodeURIComponent(occasion.name)}`)}
                                className="group cursor-pointer"
                            >

                                <div className="relative overflow-hidden rounded-sm h-95">

                                    <img
                                        src={occasion.image}
                                        alt={occasion.name}
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition duration-300"></div>

                                    <div className="absolute inset-0 flex items-center justify-center">

                                        <h2 className="text-white text-3xl font-serif tracking-wide">
                                            {occasion.name}
                                        </h2>

                                    </div>

                                </div>

                                <p className="text-center text-xs tracking-[2px] uppercase text-[#98676A] mt-4 group-hover:text-[#382522]">
                                    Explore Collection →
                                </p>

                            </div>

                        ))}

                    </div>

                </section>

            </div>

            <Footer />
        </>
    )
}

export default OccasionWearPage
