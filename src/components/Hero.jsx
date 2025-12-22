import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const images = [
        'https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        '/images/hero-mountain.jpg',
        '/images/hero-mountain.jpg', // Your uploaded epic mountain shot
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1920&h=1080&fit=crop', // Stunning drone view
        'https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&w=1920&h=1080&fit=crop', // Misty mountains
        'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=1920&h=1080&fit=crop' // Ocean/Coastal view
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            position: 'relative',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            paddingTop: 'var(--nav-height)'
        }}>
            {/* Slideshow Background */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.8)), url("${images[currentImage]}")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: -1
                    }}
                />
            </AnimatePresence>

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.1' }}
                >
                    Drone-Stuff
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 2.5rem' }}
                >
                    Professional Drone Services, Training, and Security Solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
                        Get a Quote
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
