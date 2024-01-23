import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/Pages/LandingPage';
import LandingPage2 from './components/Pages/LandingPage2';
import LandingPage3 from './components/Pages/LandingPage3';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const App = () => {
    const { scroll } = useLocomotiveScroll();

    // Function to scroll to the next section
    const scrollToNextSection = () => {
        const nextSection = scroll.scroll.instance.index + 1;
        scroll.scrollTo(nextSection);
    };

    // Attach a scroll event listener to trigger automatic scrolling
    useEffect(() => {
        const handleScroll = () => {
            // You can customize the logic to trigger automatic scrolling
            // Here, we'll scroll to the next section when the user scrolls down
            if (scroll.scroll.instance.scroll.y >= window.innerHeight) {
                scrollToNextSection();
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scroll]);

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
