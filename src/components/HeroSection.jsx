import { Link } from 'react-router-dom'

import bridalHero from '../assets/images/bridal-hero.jpg'
function HeroSection() {
    return (
        <>
            <section className="min-h-[80vh] bg-[#F8F3EF] flex items-center px-5 md:px-10 lg:px-20 py-12">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="text-center md:text-left">

                        <p className="text-[#98676A] tracking-[0.3em] text-sm mb-4">
                            BRIDAL COUTURE
                        </p>

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#382522] leading-tight">
                            Your Dream Dress,
                            <br />
                            Made Just For You
                        </h1>

                        <p className="text-[#8B7B76] text-base md:text-lg mt-6 max-w-lg mx-auto md:mx-0">
                            Discover elegant bridal collections and create a
                            wedding look that reflects your unique style,
                            personality, and story.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">


                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                                <Link
                                    to="/collections"
                                    className="bg-[#98676A] hover:bg-[#805255] text-white px-7 py-3 rounded-full text-center transition"
                                >
                                    Explore Collection
                                </Link>

                                <Link to="/customize" className="border border-[#98676A] text-[#805255] hover:bg-[#F0E1DA] px-7 py-3 rounded-full transition">
                                    Customize Your Dress
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">

                        <div className="w-full max-w-md">
                            <img
                                src={bridalHero}
                                alt="Bridal Collection"
                                className="w-full h-112.5 object-cover rounded-t-[180px] rounded-b-2xl"/>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default HeroSection