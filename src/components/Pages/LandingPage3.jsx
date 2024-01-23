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
                        <div className="icons-third">
                            <img src={homeIcon1} alt="Home Icon" className="icon-image" />
                        </div>
                        <div className="analytics-pill-third">
                            <div className="marquee-text">Analytics Service</div>
                        </div>
                    </div>
                </div>
                <div className="second-row-third">
                    <div className="left-div-third">
                        Explore traffic sources, page behavior, conversions and more to gain deep insight into your audience. With us, your business doesn't just adapt - it evolves
                    </div>
                    <div className="button-container-third">
                        <button className="demo-button">Request a demo</button>
                        <button className="free-button">Start for free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage3;
