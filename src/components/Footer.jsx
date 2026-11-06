import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-[#382522] text-[#FFFCF9] px-5 md:px-10 lg:px-20 pt-12 pb-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <h2 className="font-serif text-3xl font-semibold">
                        CERO
                    </h2>

                    <p className="text-[#E9DDD6] text-xs tracking-widest mt-1">
                        BRIDAL COUTURE
                    </p>

                    <p className="text-[#CDBDB7] mt-5 max-w-sm">
                        Creating beautiful bridal experiences where
                        tradition, elegance, and your personal style
                        come together.
                    </p>
                </div>
                <div>
                    <h3 className="font-serif text-xl mb-4">
                        Quick Links
                    </h3>

                    <div className="flex flex-col gap-3 text-[#CDBDB7]">

                        <Link to="/Home" className="hover:text-white">
                            Home
                        </Link>

                        <Link to="/Collections" className="hover:text-white">
                            Collections
                        </Link>

                        <Link to="/customize" className="hover:text-white">
                            Customize
                        </Link>

                        <Link to="/about" className="hover:text-white">
                            About Us
                        </Link>

                    </div>
                </div>

              
                <div>
                    <h3 className="font-serif text-xl mb-4">
                        Get In Touch
                    </h3>

                    <p className="text-[#CDBDB7] mb-3">
                        Email: hello@cero.com
                    </p>

                    <p className="text-[#CDBDB7] mb-3">
                        Phone: +91 98765 43210
                    </p>

                    <p className="text-[#CDBDB7]">
                        Crafted with love for every bride.
                    </p>
                </div>

            </div>
            <div className="border-t border-[#6B514D] mt-10 pt-5 text-center">

                <p className="text-[#CDBDB7] text-sm">
                    © 2026 CERO Bridal Couture. All rights reserved.
                </p>

            </div>

        </footer>
    )
}

export default Footer