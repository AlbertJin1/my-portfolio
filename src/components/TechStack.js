import { motion } from 'framer-motion';
import { FaReact, FaPython, FaFire } from 'react-icons/fa';
import { SiDjango, SiSupabase } from 'react-icons/si';

const TechStack = () => {
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

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 },
        },
    };

    const techs = [
        {
            name: 'React JS',
            desc: 'Building dynamic and responsive user interfaces with React.',
            icon: <FaReact className="w-8 h-8 sm:w-10 sm:h-10 text-teal group-hover:text-off-white transition-colors duration-300" />,
        },
        {
            name: 'Django',
            desc: 'Developing robust backend systems with Django and Python.',
            icon: <SiDjango className="w-8 h-8 sm:w-10 sm:h-10 text-teal group-hover:text-off-white transition-colors duration-300" />,
        },
        {
            name: 'Supabase',
            desc: 'Leveraging Supabase for scalable database and auth solutions.',
            icon: <SiSupabase className="w-8 h-8 sm:w-10 sm:h-10 text-teal group-hover:text-off-white transition-colors duration-300" />,
        },
        {
            name: 'Firebase',
            desc: 'Integrating Firebase for real-time data and authentication.',
            icon: <FaFire className="w-8 h-8 sm:w-10 sm:h-10 text-teal group-hover:text-off-white transition-colors duration-300" />,
        },
        {
            name: 'React Native',
            desc: 'Creating cross-platform mobile apps with React Native.',
            icon: <FaReact className="w-8 h-8 sm:w-10 sm:h-10 text-teal group-hover:text-off-white transition-colors duration-300" />,
        },
        {
            name: 'Python',
            desc: 'Writing efficient scripts and backend logic with Python.',
            icon: <FaPython className="w-8 h-8 sm:w-10 sm:h-10 text-teal group-hover:text-off-white transition-colors duration-300" />,
        },
    ];

    return (
        <motion.section
            className="py-12 sm:py-16 bg-dark-gray rounded-xl shadow-lg"
            id="tech-stack"
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
                    My Tech Stack
                </motion.h2>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                >
                    {techs.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="bg-mid-gray p-4 sm:p-5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 group"
                            variants={cardVariants}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <div className="flex items-center space-x-3 sm:space-x-4 mb-3">
                                <motion.div variants={iconVariants}>
                                    {tech.icon}
                                </motion.div>
                                <h3 className="text-lg sm:text-xl font-semibold text-off-white group-hover:text-teal transition-all duration-300">
                                    {tech.name}
                                </h3>
                            </div>
                            <p className="text-sm text-light-gray">{tech.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default TechStack;