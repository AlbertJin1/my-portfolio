import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const footerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: 'easeInOut' },
        },
    };

    return (
        <motion.footer
            className="bg-dark-gray text-off-white py-6 mt-12 sm:mt-16"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.p
                    className="text-xs sm:text-sm text-light-gray"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    © {new Date().getFullYear()} Jessie Albert Regualos. All rights reserved.
                </motion.p>
            </div>
        </motion.footer>
    );
};

export default Footer;