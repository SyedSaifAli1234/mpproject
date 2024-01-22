// LandingPage3.js

import React from 'react';
import './LandingPage3.css';
import homeIcon1 from '../../assets/homeIcon1.png';

const LandingPage3 = ({ id }) => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div id={id} className="landing-page-third" initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.5 }}>
            <div className="first-section-third">
                <div className="first-row-third">
                    <div className="content-container1-third">
                        <div className="text-container-third">
                            <div className="big-text-third">Maximize <span className="grey-text-third">efficiency </span>with our intuitive</div>
                        </div>
                    </div>
                    <div className="content-container2-third">
                        <div className="">
                            <img src={homeIcon1} alt="Home Icon" className="icon-image" />
                        </div>
                        <div className="analytics-pill-third">
                            <div className="marquee-text">Analytics Service</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage3;
