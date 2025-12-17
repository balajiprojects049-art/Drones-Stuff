import React from 'react';
import { Heart, Sun, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Community = () => {
    return (
        <div style={{ paddingTop: 'var(--nav-height)' }}>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(rgba(2, 6, 23, 0.75), rgba(2, 6, 23, 0.85)), url("/images/community-hero.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: 'var(--nav-height)'
            }}>
                <div className="container">
                    <div style={{ maxWidth: '800px' }}>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800' }}
                        >
                            The Community Drone Corps
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            style={{ fontSize: '1.4rem', color: '#cbd5e1', lineHeight: '1.8' }}
                        >
                            Beyond our commercial services, we operate the Community Drone Corps—our pro-bono initiative dedicated to giving back through therapeutic "Flights of Memory" for seniors in care facilities.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Community Light Show Showcase */}
            <section className="section" style={{ backgroundColor: 'var(--bg-dark)' }}>
                <div className="container">
                    <div className="hover-card img-hover-zoom" style={{ maxWidth: '1100px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                        <img
                            src="/images/community-lightshow.jpg"
                            alt="Community drone light show event"
                            style={{ width: '100%', display: 'block' }}
                        />
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: '#fff', color: '#1e1b4b' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#312e81' }}>Our Mission</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                                This initiative focuses on providing therapeutic "Flights of Memory" for seniors in care facilities, offering a unique and uplifting aerial experience.
                                <br /><br />
                                The Community Drone Corps represents our commitment to using technology for community good.
                            </p>
                            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <Heart size={40} color="#ec4899" style={{ marginBottom: '10px' }} />
                                    <p style={{ fontWeight: '600' }}>Compassion</p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <Users size={40} color="#ec4899" style={{ marginBottom: '10px' }} />
                                    <p style={{ fontWeight: '600' }}>Community</p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <Sun size={40} color="#ec4899" style={{ marginBottom: '10px' }} />
                                    <p style={{ fontWeight: '600' }}>Impact</p>
                                </div>
                            </div>
                        </div>
                        <div className="hover-card img-hover-zoom" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1516307365426-bea591f05011?w=800&h=600&fit=crop"
                                alt="Seniors enjoying community drone event"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Experience Process */}
            <section className="section" style={{ backgroundColor: 'var(--primary-light)' }}>
                <div className="container">
                    <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '3rem', color: '#fbbf24' }}>How "Flights of Memory" Works</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div className="hover-cardGlassPanel" style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(251, 191, 36, 0.2)', borderRadius: '16px', backgroundColor: 'var(--bg-dark)' }}>
                            <div style={{ fontSize: '4rem', color: 'rgba(251, 191, 36, 0.1)', fontWeight: 'bold' }}>1</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fbbf24' }}>We Bring The Sky To You</h3>
                            <p style={{ color: 'var(--secondary)' }}>Our team visits the care facility with large 60-inch screens and immersive FPV (First Person View) goggles.</p>
                        </div>
                        <div className="hover-card" style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(251, 191, 36, 0.2)', borderRadius: '16px', backgroundColor: 'var(--bg-dark)' }}>
                            <div style={{ fontSize: '4rem', color: 'rgba(251, 191, 36, 0.1)', fontWeight: 'bold' }}>2</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fbbf24' }}>Interactive Flight</h3>
                            <p style={{ color: 'var(--secondary)' }}>Seniors can request to see specific local landmarks, their old neighborhoods, or simply enjoy a relaxing nature flight in real-time.</p>
                        </div>
                        <div className="hover-card" style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(251, 191, 36, 0.2)', borderRadius: '16px', backgroundColor: 'var(--bg-dark)' }}>
                            <div style={{ fontSize: '4rem', color: 'rgba(251, 191, 36, 0.1)', fontWeight: 'bold' }}>3</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fbbf24' }}>Therapeutic Connection</h3>
                            <p style={{ color: 'var(--secondary)' }}>The experience often sparks joy, conversation, and vivid memories, providing a powerful emotional lift.</p>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Community;
