import '../../App.css'
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection  from '../HeroSection'
import React from 'react'



function Home(){

    return(
        <>
        <HeroSection />
        <Cards heading="Check out these EPIC Destinations!"/>
        <Footer />
        </>
    );
}

export default Home