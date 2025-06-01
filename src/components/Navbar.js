import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ scrollToAbout, scrollToProjects, scrollToTechStack, scrollToShowcase, scrollToContact }) => {
    const navVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeInOut' },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.85 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' },
        }),
    };

    return (
        <motion.nav
            className="fixed top-0 left-0 w-full bg-dark-gray text-off-white z-50 shadow-md"
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center">
                <motion.span
                    className="text-xl sm:text-2xl font-semibold tracking-tight"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Portfolio
                </motion.span>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-2 sm:mt-0">
                    {[
                        { text: 'About', onClick: scrollToAbout },
                        { text: 'Projects', onClick: scrollToProjects },
                        { text: 'Tech Stack', onClick: scrollToTechStack },
                        { text: 'Showcase', onClick: scrollToShowcase },
                        { text: 'Contact', onClick: scrollToContact },
                    ].map((item, index) => (
                        <motion.button
                            key={item.text}
                            onClick={item.onClick}
                            className="text-sm sm:text-base font-medium hover:bg-mid-gray hover:text-teal px-3 py-2 rounded-md transition-all duration-300"
                            variants={buttonVariants}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                        >
                            {item.text}
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;