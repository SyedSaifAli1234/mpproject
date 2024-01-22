import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from "./components/Pages/LandingPage";
import { Link, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';
import './App.css';
import LandingPage2 from "./components/Pages/LandingPage2";
import LandingPage3 from "./components/Pages/LandingPage3";


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

    return (
        <div>
            {/*<Navbar />*/}
            {/*<Link to="section1" smooth={true} duration={500}>Section 1</Link>*/}
            <motion.div className="landing-page" initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.5 }}>
                {/*<LandingPage/>*/}
                {/*<LandingPage2 id="section1"/>*/}
                <LandingPage3 id="section1"/>
            </motion.div>
        </div>
    );
};

export default App;
