import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import './LandingPage.css';
import homeIcon1 from '../../assets/homeIcon1.png';
import homeIcon3 from '../../assets/homeIcon3.png';
import image1 from '../../assets/laptop.png';
import playButton from '../../assets/play-button.png';


import { useInView } from 'react-intersection-observer';

const LandingPage = ({ id }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
    };

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            className="landing-page"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
        >
            <motion.div className="first-section">
                <motion.div className="first-row">
                    <motion.div className="content-container1">
                        <motion.div className="text-container">
                            <img src={homeIcon1} alt="Home Icon" className="icon-image" />
                            <motion.div className="big-text">Analytics</motion.div>
                        </motion.div>
                        <motion.div className="text-container2">
                            <motion.div className="big-text">
                                that <span className="grey-text">helps</span> you
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div className="content-container2">
                        <motion.div className="image-container">
                            <motion.img
                                src={playButton}
                                alt="Play Button"
                                className="play-button"
                            />
                            <motion.img
                                src={image1}
                                alt="Laptop Image"
                                className="laptop-image"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div className="second-row">
                    <motion.div className="content-container3">
                        <motion.div className="big-text">shape</motion.div>
                        <motion.img
                            src={homeIcon3}
                            alt="Home Icon"
                            className="icon-image3"
                        />
                        <motion.div className="big-text">the future</motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default LandingPage;
