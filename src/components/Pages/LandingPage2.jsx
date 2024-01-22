import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage2.css';
import comp1 from '../../assets/comp.png';
import comp2 from '../../assets/comp2.png';
const LandingPage2 = ({ id }) => {
    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div id={id} className="landing-page-second" initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.5 }}>
            <div className="second-section-second">
                <div className="content-container1-second">
                    <div className="text-container-second">
                        <div className="first-text-second">Your key to strategic success through analytics</div>
                    </div>
                    <div className="text-container2-second">
                        <div className="second-text-second">Ready for exciting, instantaneous, all-accessible insights in real time?</div>
                    </div>
                </div>
                <div className="content-container2-second">
                    <div className="image-container-second">
                        <div>
                            <img src={comp1} alt="Laptop Image" className="laptop-image-second" />
                        </div>
                        <div>
                            <img src={comp2} alt="Laptop Image" className="laptop-image-second" />
                        </div>
                    </div>
                </div>
                <div className="content-container3-second">
                    <div className="up-to-text">up to</div>
                    <div className="percentage-text">45%</div>
                    <div className="description-text swirl-in-fwd">
                        Increase your analytics efficiency by up to 45%. Unique algorithms provide insights from data, reduce time for analysis and save time for making important, informed decisions.
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LandingPage2;