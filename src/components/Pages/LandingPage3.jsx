// LandingPage.js

import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage3.css';
import homeIcon1 from '../../assets/homeIcon1.png';
import homeIcon3 from '../../assets/homeIcon3.png';
import image1 from '../../assets/laptop.png';
import playButton from '../../assets/play-button.png';

const LandingPage3 = ({ id }) => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div id={id} className="landing-page" initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.5 }}>
            <div className="first-section">
                <div className="first-row">
                    <div className="content-container1">
                        <div className="text-container">
                            <div className="big-text">Maximize <span className="grey-text">efficiency </span>with our intuitive</div>
                        </div>
                    </div>
                    <div className="content-container2">
                        <div className="image-container">
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LandingPage3;
