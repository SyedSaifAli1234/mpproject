// LandingPage.js

import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';
import homeIcon1 from '../../assets/homeIcon1.png';
import homeIcon3 from '../../assets/homeIcon3.png';
import image1 from '../../assets/laptop.png';
import playButton from '../../assets/play-button.png';

const LandingPage = ({ id }) => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            id={id}
            className="landing-page"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            <div className="first-row">
                <div className="content-container1">
                    <div className="text-container">
                        {/* Add a wrapper div for positioning the play button */}
                        <div className="play-button-wrapper">
                            <img src={playButton} alt="Play Button" className="play-button" />
                        </div>
                        <img src={homeIcon1} alt="Home Icon" className="icon-image" />
                        <div className="big-text">Analytics</div>
                    </div>
                    <div className="text-container2">
                        <div className="big-text">that <span className="grey-text">helps</span> you</div>
                    </div>
                </div>
                <div className="content-container2">
                    <div className="image-container">
                        <img src={image1} alt="Laptop Image" className="laptop-image" />
                    </div>
                </div>
            </div>
            <div className="second-row">
                <div className="content-container3">
                    <div className="big-text">shape</div>
                    <img src={homeIcon3} alt="Home Icon" className="icon-image3" />
                    <div className="big-text">the future</div>
                </div>
            </div>
        </motion.div>
    );
};

export default LandingPage;
