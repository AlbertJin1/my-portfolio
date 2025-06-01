import React from 'react';
import { motion } from 'framer-motion';
import kioscorpThumbnail from '../img/projects/kioscorp.png';
import bonbonThumbnail from '../img/projects/bonbon.png';

const Projects = () => {
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

    const projects = [
        {
            title: 'KiosCorp',
            desc: 'KiosCorp streamlines operations at Universal Auto Supply and Bolt Center by replacing manual processes with an integrated kiosk, POS, and inventory management system to reduce wait times, minimize errors, and improve stock control.',
            url: 'https://github.com/AlbertJin1/kioscorp-final',
            thumbnail: kioscorpThumbnail,
        },
        {
            title: 'Barangay Bonbon Web App',
            desc: 'The Barangay Bonbon web application aims to address critical gaps in resident profiling and geographic data, enabling more efficient community management, data-driven decision-making, and equitable resource allocation.',
            url: 'https://barangay-bonbon.vercel.app/',
            thumbnail: bonbonThumbnail,
        },
    ];

    return (
        <motion.section
            className="py-12 sm:py-16 bg-dark-gray rounded-xl shadow-lg"
            id="projects"
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
                    My Projects
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6"
                    variants={containerVariants}
                >
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-mid-gray p-4 sm:p-5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 group"
                            variants={cardVariants}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <img
                                src={project.thumbnail}
                                alt={`${project.title} Thumbnail`}
                                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform duration-400"
                            />
                            <h3 className="text-lg sm:text-xl font-semibold text-off-white mb-3 group-hover:text-teal transition-all duration-300">
                                {project.title}
                            </h3>
                            <p className="text-sm text-light-gray mb-3">{project.desc}</p>
                            <span className="text-sm text-teal group-hover:underline transition-all duration-300">
                                Explore Project
                            </span>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Projects;