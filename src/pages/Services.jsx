import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, HardHat, Tv, ShieldAlert, FileText } from 'lucide-react';
import FAQ from '../components/FAQ';

const Services = () => {
    return (
        <div style={{ paddingTop: 'var(--nav-height)' }}>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(rgba(2, 6, 23, 0.75), rgba(2, 6, 23, 0.85)), url("/images/services-showcase.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: 'var(--nav-height)'
            }}>
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>Aerial Imagery & Security Solutions</h1>
                    <p style={{ fontSize: '1.3rem', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Professional-grade aerial data and observation to meet specific commercial and security needs. All operations conducted by an FAA-certified remote pilot with full insurance coverage.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            {/* Services Sections */}
            <div style={{ paddingBottom: '5rem' }}>
                {/* Real Estate */}
                <ServiceSection
                    title="Real Estate & Property"
                    description="Stunning aerial photographs, cinematic video tours, and detailed property surveys. Showcase land, buildings, and unique features from the perfect perspective."
                    icon={Camera}
                    image="/images/real-estate-aerial.jpg"
                    align="left"
                    features={["HDR Photography", "4K Video Tours", "Property Line Overlays", "Neighborhood Context"]}
                />

                {/* Construction */}
                <ServiceSection
                    title="Construction & Inspection"
                    description="Track site progress, document phases, and conduct safe, efficient roof or structural inspections with high-resolution imagery."
                    icon={HardHat}
                    image="/images/construction-aerial.jpg"
                    align="right"
                    features={["Progress Timelines", "Roof Inspections", "Site Mapping", "Hazard Identification"]}
                />

                {/* Event */}
                <ServiceSection
                    title="Event & Commercial"
                    description="Capture dynamic footage for marketing, festivals, and business promotions. Add a compelling 'bird's-eye view' to your story."
                    icon={Tv}
                    image="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1000&h=700&fit=crop"
                    align="left"
                    features={["Event Highlights", "Marketing Reels", "Live Monitoring", "Multi-Angle Coverage"]}
                />

                {/* Security */}
                <section className="section" style={{ backgroundColor: '#020617' }}>
                    <div className="container">
                        <div style={{
                            backgroundColor: '#1e293b',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            flexDirection: 'column', // Mobile first
                            position: 'relative'
                        }}>
                            <style>{`
                                @media (min-width: 768px) {
                                    .security-layout { flex-direction: row !important; }
                                    .security-image { width: 50% !important; height: auto !important; }
                                    .security-content { width: 50% !important; }
                                }
                            `}</style>
                            <div className="security-layout" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <div className="security-image" style={{ width: '100%', height: '300px', backgroundImage: 'url("https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.6)' }}></div>
                                    <div style={{
                                        position: 'absolute',
                                        top: '20px',
                                        left: '20px',
                                        background: 'var(--accent)',
                                        color: '#fff',
                                        padding: '5px 15px',
                                        borderRadius: '4px',
                                        fontSize: '0.8rem',
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '5px'
                                    }}>
                                        <ShieldAlert size={14} /> CONFIDENTIAL
                                    </div>
                                </div>
                                <div className="security-content" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                        <ShieldAlert size={32} color="var(--accent)" />
                                        <h3 style={{ fontSize: '1.8rem', color: '#fff' }}>Security Consultation</h3>
                                    </div>
                                    <p style={{ color: 'var(--secondary)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                                        Discreet, tailored aerial observation solutions for asset protection and monitoring. Requires a signed NDA and private consultation.
                                    </p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#94a3b8', marginTop: 'auto' }}>
                                        <FileText size={16} /> <span>Strict NDA Protocols • Vulnerability Reports • Night Ops</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* FAQ */}
            <section className="section" style={{ backgroundColor: 'var(--bg-dark)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <FAQ />
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ backgroundColor: 'var(--primary-light)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '1.5rem' }}>Ready to see your project from above?</h2>
                    <Link to="/contact" className="btn btn-primary">Contact Us for a Custom Quote</Link>
                </div>
            </section>
        </div>
    );
};

const ServiceSection = ({ title, description, icon: Icon, image, align, features }) => (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-dark)' }}>
        <div className="container">
            <div style={{
                display: 'flex',
                flexDirection: align === 'left' ? 'row' : 'row-reverse',
                alignItems: 'center',
                gap: '4rem',
                flexWrap: 'wrap'
            }}>
                <style>{`
                    @media (max-width: 968px) {
                        .service-row { flex-direction: column !important; }
                        .service-img { width: 100% !important; }
                        .service-content { width: 100% !important; }
                    }
                `}</style>
                <div className="service-content" style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{ display: 'inline-block', padding: '12px', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px', marginBottom: '1.5rem' }}>
                        <Icon size={32} color="var(--accent)" />
                    </div>
                    <h3 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>{title}</h3>
                    <p style={{ fontSize: '1.1rem', color: 'var(--secondary)', lineHeight: '1.7', marginBottom: '2rem' }}>{description}</p>

                    {/* Render Features List if available */}
                    {features && (
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                            {features.map((feature, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.95rem' }}>
                                    <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent)', borderRadius: '50%' }}></div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    )}

                    <Link to="/contact" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>Inquire About This</Link>
                </div>
                <div className="service-img" style={{ flex: 1, minWidth: '300px' }}>
                    <div className="hover-card img-hover-zoom" style={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                        height: '350px'
                    }}>
                        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Services;
