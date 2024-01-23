import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/Pages/LandingPage';
import LandingPage2 from './components/Pages/LandingPage2';
import LandingPage3 from './components/Pages/LandingPage3';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const App = () => {
    const { scroll } = useLocomotiveScroll();


    return (
        <div data-scroll-container data-scroll-speed="2">
            <Navbar />
            <div data-scroll-section>
                <LandingPage />
            </div>
            <div data-scroll-section data-scroll-speed="1.5">
                <LandingPage2 />
            </div>
            <div data-scroll-section data-scroll-speed="1">
                <LandingPage3 />
            </div>
        </div>
    );
};

export default App;
