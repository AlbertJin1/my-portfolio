import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import TechStack from './TechStack';
import Showcase from './Showcase';
import Contact from './Contact';
import Footer from './Footer';

const MainComponent = () => {
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const techStackRef = useRef(null);
    const showcaseRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.div
            className="min-h-screen bg-soft-black text-off-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
            <Navbar
                scrollToAbout={() => scrollToSection(aboutRef)}
                scrollToProjects={() => scrollToSection(projectsRef)}
                scrollToTechStack={() => scrollToSection(techStackRef)}
                scrollToShowcase={() => scrollToSection(showcaseRef)}
                scrollToContact={() => scrollToSection(contactRef)}
            />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={aboutRef} className="pt-16 sm:pt-20">
                    <About />
                </div>
                <div ref={projectsRef} className="pt-16 sm:pt-20">
                    <Projects />
                </div>
                <div ref={techStackRef} className="pt-16 sm:pt-20">
                    <TechStack />
                </div>
                <div ref={showcaseRef} className="pt-16 sm:pt-20">
                    <Showcase />
                </div>
                <div ref={contactRef} className="pt-16 sm:pt-20">
                    <Contact />
                </div>
            </main>
            <Footer />
        </motion.div>
    );
};

export default MainComponent;