import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ scrollToAbout, scrollToProjects, scrollToTechStack, scrollToShowcase, scrollToContact }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const hamburgerRef = useRef(null);

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

    const dropdownVariants = {
        hidden: { opacity: 0, scaleY: 0, transformOrigin: 'top' },
        visible: {
            opacity: 1,
            scaleY: 1,
            transition: { duration: 0.3, ease: 'easeInOut' },
        },
    };

    const navItems = [
        { text: 'About', onClick: scrollToAbout },
        { text: 'Projects', onClick: scrollToProjects },
        { text: 'Tech Stack', onClick: scrollToTechStack },
        { text: 'Showcase', onClick: scrollToShowcase },
        { text: 'Contact', onClick: scrollToContact },
    ];

    const handleNavClick = (onClick) => {
        onClick();
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isMenuOpen &&
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <motion.nav
            className="fixed top-0 left-0 w-full bg-dark-gray text-off-white z-50 shadow-md"
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
                <motion.span
                    className="text-xl sm:text-2xl font-semibold tracking-tight"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    Portfolio
                </motion.span>

                {/* Desktop Menu */}
                <div className="hidden sm:flex flex-row space-x-3">
                    {navItems.map((item, index) => (
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

                {/* Mobile Hamburger Button */}
                <button
                    ref={hamburgerRef}
                    className="sm:hidden focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isMenuOpen ? 'M6 18L18 6M6 6l12  Carrera 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <motion.div
                ref={dropdownRef}
                className="sm:hidden absolute top-full left-0 w-full bg-dark-gray shadow-lg"
                variants={dropdownVariants}
                initial="hidden"
                animate={isMenuOpen ? 'visible' : 'hidden'}
            >
                <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
                    {navItems.map((item, index) => (
                        <motion.button
                            key={item.text}
                            onClick={() => handleNavClick(item.onClick)}
                            className="text-base font-medium hover:bg-mid-gray hover:text-teal px-3 py-2 rounded-md text-left transition-all duration-300"
                            variants={buttonVariants}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                        >
                            {item.text}
                        </motion.button>
                    ))}
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;