import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import './LandingPage3.css';
import pulse from '../../assets/heart.png';
import { useInView } from 'react-intersection-observer';

const LandingPage3 = ({ id }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false }); // Set triggerOnce to false

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
    };

    const textContainerVariants = {
        hidden: { opacity: 0, y: 50 }, // Initial position below the imaginary line
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: {delay: 1.2, duration: 0.8, ease: 'easeInOut' } },
    };

    const analyticsPillVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: {delay: 1.2, duration: 0.8, ease: 'easeInOut' } },
    };

    const marqueeTextVariants = {
        hidden: { opacity: 0, y: 50 }, // Initial position below the imaginary line
        visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.8, ease: 'easeInOut' } },
    };

    const leftDivVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { delay: 1, duration: 0.8, ease: 'easeInOut' } },
    };

    const buttonContainerVariants = {
        hidden: { opacity: 0, scale: 0.5 }, // Initial scale for a "bubble" effect
        visible: { opacity: 1, scale: 1, transition: { delay: 1.2, duration: 0.8, ease: 'easeInOut' } },
    };

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            className="landing-page-third"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
        >
            <motion.div className="first-section-third">
                <motion.div className="first-row-third" variants={textContainerVariants}>
                    <motion.div className="content-container1-third">
                        <motion.div className="text-container-third">
                            <motion.div className="big-text-third">
                                Maximize <span className="grey-text-third">efficiency </span>with
                                our intuitive
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div className="content-container2-third" variants={analyticsPillVariants}>
                        <motion.div className="icon-third">
                            <motion.img src={pulse} alt="Pulse Icon" className="icon-image-third"/>
                        </motion.div>
                        <motion.div className="icon2-third">
                            <motion.div className="icon-text-third">+30%</motion.div>
                        </motion.div>
                        <motion.div
                            className="analytics-pill-third"
                            variants={analyticsPillVariants}
                        >
                            <motion.div className="marquee-text" variants={marqueeTextVariants}>Analytics Service</motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div className="second-row-third">
                    <motion.div className="left-div-third" variants={leftDivVariants}>
                        Explore traffic sources, page behavior, conversions and more to gain deep
                        insight into your audience. With us, your business doesn't just adapt - it
                        evolves
                    </motion.div>
                    <motion.div
                        className="button-container-third"
                        variants={buttonContainerVariants}
                    >
                        <button className="demo-button">Request a demo</button>
                        <button className="free-button">Start for free</button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default LandingPage3;
