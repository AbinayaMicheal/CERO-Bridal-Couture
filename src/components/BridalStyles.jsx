import { Link } from 'react-router-dom'


import sharara from "../assets/images/Sharara.jpg";
import saree from "../assets/images/Saree.jpg";
import gown from "../assets/images/Gown.jpg";
import lehenga from "../assets/images/lehenga.jpg";

function BridalStyles() {


    const styles = [
        {
            name: "SHARARA",
            category: "Sharara",
            image: sharara
        },
        {
            name: "SAREE",
            category: "Sarees",
            image: saree
        },
        {
            name: "GOWN",
            category: "Gowns",
            image: gown
        },
        {
            name: "LEHENGA",
            category: "Bridal Lehenga",
            image: lehenga
        }

    ];


    return (
        <>

            <section className="bg-[#FFFCF9] px-5 md:px-10 lg:px-20 py-16">


                <div className="text-center mb-10">

                    <p className="text-[#98676A] tracking-[0.3em] text-sm mb-3">
                        OUR COLLECTIONS
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl text-[#382522]">
                        Find Your Bridal Style
                    </h2>

                    <p className="text-[#8B7B76] mt-3 max-w-xl mx-auto">
                        Explore our carefully curated bridal styles, created
                        for every bride and every beautiful celebration.
                    </p>

                </div>

                {/* Four Fashion Categories */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 px-4 md:px-10">

                    {styles.map((style) => (

                        <Link
                            to={`/collections?category=${encodeURIComponent(style.category)}`}
                            key={style.name}
                            className="group cursor-pointer block">
                            {/* Fashion Image */}
                            <div className="relative overflow-hidden aspect-3/4 bg-[#F0E1DA]">
                                <img
                                    src={style.image}
                                    alt={style.name}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                />
                                {/* Subtle Image Overlay */}
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition duration-500"></div>

                                {/* Category Name */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-center">

                                    <h3 className="text-white text-lg md:text-2xl font-serif tracking-[2px] drop-shadow-md">
                                        {style.name}
                                    </h3>

                                    <p className="text-white text-[10px] md:text-xs tracking-[3px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        DISCOVER MORE
                                    </p>

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </section>
        </>
    )
}

export default BridalStyles