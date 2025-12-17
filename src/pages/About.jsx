import React from 'react';
import { Shield, Target, Lock } from 'lucide-react';

const About = () => {
    return (
        <div style={{ paddingTop: 'var(--nav-height)' }}>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.8)), url("/images/about-workspace.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: 'var(--nav-height)'
            }}>
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>Professionalism & Discretion</h1>
                    <p style={{ fontSize: '1.3rem', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Drones & Stuff is operated by an FAA Part 107 Certified Remote Pilot with extensive commercial flight experience across multiple sectors. Every mission prioritizes safety, compliance, and confidentiality.
                    </p>
                </div>
            </section>

            {/* Pilot Portrait Section */}
            <section className="section" style={{ backgroundColor: 'var(--bg-dark)' }}>
                <div className="container">
                    <div className="hover-card img-hover-zoom" style={{ maxWidth: '900px', margin: '0 auto 4rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                        <img
                            src="/images/about-pilot.png"
                            alt="FAA Certified Remote Pilot"
                            style={{ width: '100%', display: 'block' }}
                        />
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--primary-light)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div className="hover-card glass-panel" style={{ textAlign: 'center', padding: '2rem', borderRadius: '12px' }}>
                            <Shield size={48} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Safety First</h3>
                            <p style={{ color: 'var(--secondary)' }}>
                                We are committed to the highest standards of safety, regulatory compliance, and client confidentiality. Every mission is approached with professionalism and precision.
                            </p>
                        </div>
                        <div className="hover-card glass-panel" style={{ textAlign: 'center', padding: '2rem', borderRadius: '12px' }}>
                            <Target size={48} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Precision & Quality</h3>
                            <p style={{ color: 'var(--secondary)' }}>
                                Our work is driven by a dedication to advancing the positive and powerful applications of drone technology in Connecticut.
                            </p>
                        </div>
                        <div className="hover-card glass-panel" style={{ textAlign: 'center', padding: '2rem', borderRadius: '12px' }}>
                            <Lock size={48} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Confidentiality</h3>
                            <p style={{ color: 'var(--secondary)' }}>
                                We understand the sensitivity of security and commercial data. Your privacy and operational security are our priority.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                    <div style={{ maxWidth: '500px' }}>
                        <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>FAA Certified</h2>
                        <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                            Our operations are led by an FAA Part 107 Certified Remote Pilot, ensuring compliance with all federal aviation regulations.
                        </p>
                        <div className="hover-card" style={{ padding: '1rem', border: '1px solid var(--accent)', borderRadius: '8px', display: 'inline-block', color: 'var(--accent)' }}>
                            License # Available Upon Request
                        </div>
                    </div>
                    {/* Headshot Placeholder - Removed since we have the main portrait above, kept for layout if needed or remove entirely. Keeping layout for now but refining style */}
                    <div className="hover-card" style={{ width: '300px', height: '300px', backgroundColor: '#334155', borderRadius: '12px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Target size={64} color="var(--secondary)" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
