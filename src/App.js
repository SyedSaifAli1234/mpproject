import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from "./components/Pages/LandingPage";
import { Link, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import './App.css';

const App = () => {
    const [scrollDirection, setScrollDirection] = useState('down');
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollDirection(currentScrollY > 0 && currentScrollY > scrollY ? 'down' : 'up');
            setScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const scrollToNextSection = () => {
        scroll.scrollToBottom();
    };

    return (
        <div>
            <Navbar />
            <Link to="section1" smooth={true} duration={500}>Section 1</Link>
            <Link to="section2" smooth={true} duration={500}>Section 2</Link>

            <motion.div
                id="section1"
                className="landing-page"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5 }}
            >
                <LandingPage />
            </motion.div>

            <motion.div
                id="section2"
                className="landing-page"
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.5 }}
            >
                <LandingPage />
            </motion.div>

            {/* Add more sections as needed */}

            {scrollDirection === 'up' && (
                <button onClick={scrollToNextSection} className="scroll-trigger">
                    Scroll to Next Section
                </button>
            )}
        </div>
    );
};

export default App;
