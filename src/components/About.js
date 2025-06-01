import { motion } from 'framer-motion';
import aboutMe from '../img/about/me.png';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut', type: 'spring', stiffness: 90 },
        },
    };

    const photoVariants = {
        hidden: { opacity: 0, scale: 0.9, rotate: -5 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 0.7, ease: 'easeOut' },
        },
    };

    return (
        <motion.section
            className="py-12 sm:py-16 bg-dark-gray rounded-xl shadow-lg"
            id="about"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-2xl sm:text-3xl font-bold text-off-white mb-6 sm:mb-8 text-center"
                    variants={childVariants}
                >
                    About Me
                </motion.h2>
                <div className="flex flex-col items-center gap-6 sm:gap-8">
                    <motion.div
                        className="relative w-56 h-56 sm:w-72 sm:h-72"
                        variants={photoVariants}
                    >
                        <img
                            src={aboutMe}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-400"
                        />
                    </motion.div>
                    <motion.div
                        className="text-center"
                        variants={childVariants}
                    >
                        <p className="text-sm sm:text-base text-light-gray leading-relaxed max-w-2xl mx-auto">
                            I'm Jessie Albert Regualos, a tech-savvy professional with expertise in hardware and software troubleshooting, network setup, and custom computer assembly. Passionate about solving technical challenges and delivering efficient IT solutions. Experienced in freelance work and software development, with a strong background in full-stack development and IT support.
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;