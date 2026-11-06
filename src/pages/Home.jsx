import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


import HeroSection from '../components/HeroSection'

import OccasionWear from './OccasionWear'

import BridalStyles from '../components/BridalStyles'

import AboutSections from '../components/AboutSection'

function Home() {
    return (

        <>
            <Navbar></Navbar>

            <HeroSection></HeroSection>

            <BridalStyles></BridalStyles>

            <OccasionWear></OccasionWear>

            <AboutSections></AboutSections>

            <Footer></Footer>
        </>
    )
}

export default Home