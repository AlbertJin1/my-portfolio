import React from 'react';
import { motion } from 'framer-motion';
import laptopimage from '../img/showcase/laptop.jpg';
import gpuimage from '../img/showcase/gpu.jpg';
import cleaningimage from '../img/showcase/cleaning.jpg';

const Showcase = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut', type: 'spring', stiffness: 100 },
        },
    };

    const showcaseItems = [
        {
            title: 'GPU Repair',
            desc: 'Restored a low to high-end GPU to full functionality by diagnosing and fixing thermal issues. (Zotac RTX 3060 shown in the image)',
            image: gpuimage,
        },
        {
            title: 'PC Cleaning',
            desc: `Performed deep cleaning and optimization on a client's gaming PC for improved performance.`,
            image: cleaningimage,
        },
        {
            title: 'Laptop Troubleshooting',
            desc: `Resolved software and hardware issues on a client's laptop, restoring it to peak condition.`,
            image: laptopimage,
        },
    ];

    return (
        <motion.section
            className="py-12 sm:py-16 bg-dark-gray rounded-xl shadow-lg"
            id="showcase"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-2xl sm:text-3xl font-bold text-off-white mb-6 sm:mb-8 text-center"
                    variants={cardVariants}
                >
                    Tech Showcase
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                >
                    {showcaseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-mid-gray p-4 sm:p-5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 group"
                            variants={cardVariants}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <img
                                src={item.image}
                                alt={`${item.title} Showcase`}
                                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform duration-400"
                            />
                            <h3 className="text-lg sm:text-xl font-semibold text-off-white mb-3 group-hover:text-teal transition-all duration-300">
                                {item.title}
                            </h3>
                            <p className="text-sm text-light-gray">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Showcase;