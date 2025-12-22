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
                        Drone-Stuff is operated by an FAA Part 107 Certified Remote Pilot with extensive commercial flight experience across multiple sectors. Every mission prioritizes safety, compliance, and confidentiality.
                    </p>
                </div>
            </section>

            {/* Meet Ernest - Owner & Operator */}
            <section className="section" style={{ backgroundColor: 'var(--bg-dark)' }}>
                <div className="container">
                    <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2.5rem' }}>Meet Ernest</h2>
                    <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
                        Owner, Operator & FAA Part 107 Certified Remote Pilot
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        {/* Ernest's Photo */}
                        <div className="hover-card img-hover-zoom" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                            <img
                                src="/images/ernest-owner.jpg"
                                alt="Ernest - Owner & FAA Certified Remote Pilot"
                                style={{ width: '100%', display: 'block' }}
                            />
                        </div>

                        {/* Ernest's Bio */}
                        <div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>
                                Professional Drone Services Since 2018
                            </h3>
                            <div style={{ color: 'var(--secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    Ernest is the founder and sole operator of <strong style={{ color: '#fff' }}>Drone-Stuff</strong>, bringing years of expertise in aerial photography, videography, and commercial drone operations across Connecticut.
                                </p>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    As an <strong style={{ color: '#fff' }}>FAA Part 107 Certified Remote Pilot</strong>, Ernest specializes in:
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                                    <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✈️</span>
                                        Real Estate & Property Documentation
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✈️</span>
                                        Construction Progress Monitoring
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✈️</span>
                                        Infrastructure Inspections
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✈️</span>
                                        Event Coverage & Promotional Videos
                                    </li>
                                    <li style={{ marginBottom: '0.8rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>✈️</span>
                                        Drone Pilot Training & Consultation
                                    </li>
                                </ul>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    With a commitment to <strong style={{ color: '#fff' }}>safety, professionalism, and quality</strong>, Ernest has completed hundreds of successful missions for clients ranging from homeowners to large commercial enterprises.
                                </p>
                                <div className="glass-panel" style={{ padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.2)', backgroundColor: 'rgba(251, 191, 36, 0.05)' }}>
                                    <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.95rem' }}>
                                        <strong style={{ color: 'var(--accent)' }}>"I founded Drone-Stuff to bring cutting-edge aerial technology to Connecticut businesses and residents. Every project receives my personal attention and expertise."</strong>
                                    </p>
                                    <p style={{ margin: '0.5rem 0 0 0', textAlign: 'right', fontSize: '0.9rem' }}>
                                        — Ernest, Owner & Chief Pilot
                                    </p>
                                </div>
                            </div>
                        </div>
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
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>FAA Certified & Insured</h2>
                        <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            All operations are led by Ernest, an FAA Part 107 Certified Remote Pilot, ensuring full compliance with federal aviation regulations and the highest safety standards.
                        </p>
                        <div className="hover-card" style={{ padding: '1.5rem', border: '2px solid var(--accent)', borderRadius: '12px', display: 'inline-block', color: 'var(--accent)', backgroundColor: 'rgba(251, 191, 36, 0.05)' }}>
                            <strong>FAA Remote Pilot Certificate</strong><br />
                            License # Available Upon Request
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
