import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.5, ease: 'easeOut', type: 'spring', stiffness: 110 },
        },
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 },
        },
    };

    return (
        <motion.section
            className="py-12 sm:py-16 bg-dark-gray rounded-xl shadow-lg"
            id="contact"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-2xl sm:text-3xl font-bold text-off-white mb-6 sm:mb-8 text-center"
                    variants={itemVariants}
                >
                    Get in Touch
                </motion.h2>
                <motion.p
                    className="text-sm sm:text-base text-light-gray mb-6 text-center max-w-xl mx-auto"
                    variants={itemVariants}
                >
                    Let's connect! Reach out via email, phone, or find me on social platforms.
                </motion.p>
                <motion.div
                    className="flex flex-col items-center space-y-4"
                    variants={containerVariants}
                >
                    {[
                        {
                            label: 'Email',
                            href: 'mailto:regualos.jessiealbert@gmail.com',
                            text: 'regualos.jessiealbert@gmail.com',
                            icon: <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-off-white group-hover:text-teal transition-colors duration-300" />,
                        },
                        {
                            label: 'Phone',
                            href: 'tel:+639972671584',
                            text: '🇵🇭 +63 997 267 1584',
                            icon: <FaPhone className="w-5 h-5 sm:w-6 sm:h-6 text-off-white group-hover:text-teal transition-colors duration-300" />,
                        },
                        {
                            label: 'LinkedIn',
                            href: 'https://www.linkedin.com/in/jessie-albert-regualos-3a4765340/',
                            text: 'linkedin.com/in/jessie-albert-regualos-3a4765340/',
                            icon: <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-off-white group-hover:text-teal transition-colors duration-300" />,
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/AlbertJin1',
                            text: 'github.com/AlbertJin1',
                            icon: <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 text-off-white group-hover:text-teal transition-colors duration-300" />,
                        },
                    ].map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 group w-full max-w-xs sm:max-w-sm p-3 rounded-md hover:bg-mid-gray transition-all duration-300"
                            variants={itemVariants}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            <motion.div variants={iconVariants}>
                                {item.icon}
                            </motion.div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-off-white">{item.label}</span>
                                <span className="text-xs text-light-gray group-hover:text-teal group-hover:underline transition-all duration-300">
                                    {item.text}
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contact;