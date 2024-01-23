import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import './LandingPage2.css';
import comp1 from '../../assets/comp.png';
import comp2 from '../../assets/comp2.png';
import { useInView } from 'react-intersection-observer';

const LandingPage2 = ({ id }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
    };

    const imageVariants = {
        hidden: { scale: 0 },
        visible: {
            scale: 1,
            transition: { delay: 0.5, duration: 0.8, ease: 'easeInOut' },
        },
    };

    const textContainerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
    };

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            className="landing-page-second"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
        >
            <motion.div className="second-section-second">
                <motion.div
                    className="content-container1-second"
                    variants={textContainerVariants}
                >
                    <motion.div className="text-container-second">
                        <motion.div className="first-text-second">
                            Your key to strategic success through analytics
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="text-container2-second"
                        variants={textContainerVariants}
                    >
                        <motion.div className="second-text-second">
                            Ready for exciting, instantaneous, all-accessible insights in real time?
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div className="content-container2-second" variants={imageVariants}>
                    <motion.div className="image-container-second">
                        <motion.div variants={imageVariants}>
                            <img src={comp1} alt="Laptop Image" className="laptop-image-second" />
                        </motion.div>
                        <motion.div variants={imageVariants}>
                            <img src={comp2} alt="Laptop Image" className="laptop-image-second" />
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="content-container3-second"
                    variants={textContainerVariants}
                >
                    <motion.div className="up-to-text">up to</motion.div>
                    <motion.div className="percentage-text">45%</motion.div>
                    <motion.div className="description-text swirl-in-fwd">
                        Increase your analytics efficiency by up to 45%. Unique algorithms provide
                        insights from data, reduce time for analysis, and save time for making
                        important, informed decisions.
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default LandingPage2;
