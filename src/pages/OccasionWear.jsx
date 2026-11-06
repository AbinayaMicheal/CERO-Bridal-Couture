import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import wedding from "../assets/images/wedding1.jpg";
import reception from "../assets/images/reception.jpg";
import engagement from "../assets/images/engagement.jpg";
import mehendi from "../assets/images/mehendi.jpg";
import haldi from "../assets/images/haldi.jpg";
import sangeet from "../assets/images/sangeet.jpg";

function OccasionWear() {
    const navigate = useNavigate();

    const occasions = [
        {
            name: "Wedding",
            image: wedding
        },
        {
            name: "Reception",
            image: reception
        },
        {
            name: "Engagement",
            image: engagement
        },
        {
            name: "Mehendi",
            image: mehendi
        },
        {
            name: "Haldi",
            image: haldi
        },
        {
            name: "Sangeet",
            image: sangeet
        }
    ];

    return (
        <section className="bg-[#F8F3EF] py-16 px-5 md:px-12">

            <div className="text-center mb-10">
                <p className="text-[#98676A] uppercase tracking-[4px] text-xs mb-3">
                    Celebrate Every Moment
                </p>

                <h2 className="text-3xl md:text-4xl text-[#382522] font-serif">
                    Dress for the Occasion
                </h2>

                <p className="text-[#8B7B76] mt-3 text-sm md:text-base">
                    Discover beautiful styles for every special celebration.
                </p>
            </div>

            <div className="flex justify-end mb-4">
                <Link
                    to="/occasion-wear"
                    className="text-[#98676A] hover:text-[#805255] text-sm font-medium"
                >
                    View All →
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                {occasions.map((occasion) => (
                    <div
                        key={occasion.name}
                        onClick={() => navigate(`/collections?occasion=${encodeURIComponent(occasion.name)}`)}
                        className="relative h-64 md:h-96 overflow-hidden group cursor-pointer"
                    >
                        <img
                            src={occasion.image}
                            alt={occasion.name}
                            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition duration-300"></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <h3 className="text-white text-xl md:text-3xl font-serif tracking-wide">
                                {occasion.name}
                            </h3>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default OccasionWear;