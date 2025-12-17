import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { Camera, BookOpen, Heart, Award, ShieldCheck, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Gallery from '../components/Gallery';

const Home = () => {
    const services = [
        {
            icon: Camera,
            title: "Drone Services",
            description: "Aerial imagery, property surveys, and tailored security consultations for businesses and properties.",
            link: "/services",
            ctaText: "Learn More"
        },
        {
            icon: BookOpen,
            title: "Drone Training",
            description: "From recreational certification to commercial Part 107 prep. Become a confident, licensed pilot.",
            link: "/training",
            ctaText: "View Training"
        },
        {
            icon: Heart,
            title: "Community Drone Corps",
            description: "Our pro-bono initiative providing therapeutic aerial experiences for seniors.",
            link: "/community",
            ctaText: "Our Mission"
        }
    ];

    return (
        <div>
            <Hero />

            {/* Intro Section */}
            <section className="section" style={{ backgroundColor: 'var(--bg-dark)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
                        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Precision from Above</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--secondary)' }}>
                            FAA Part 107 Certified and fully insured drone services for commercial, creative, and security applications in Connecticut. Expert pilot training to launch your skills.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Work Gallery */}
            <section className="section" style={{ backgroundColor: 'var(--bg-dark)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Featured Operations</h2>
                        <p style={{ color: 'var(--secondary)' }}>A glimpse of our aerial capabilities across Connecticut.</p>
                    </div>
                    <Gallery />
                </div>
            </section>

            {/* How It Works Section */}
            <section className="section" style={{ backgroundColor: 'var(--primary-light)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>How We Operate</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <StepCard
                            number="01"
                            title="Consultation & Safety Check"
                            description="We discuss your project goals, check airspace regulations, and plan a safe, compliant flight path."
                        />
                        <StepCard
                            number="02"
                            title="Mission Execution"
                            description="Our FAA-certified pilot conducts the operation using state-of-the-art drone technology to capture precision data."
                        />
                        <StepCard
                            number="03"
                            title="Rapid Delivery"
                            description="Receive your high-resolution imagery, video, or data analysis within 24-48 hours via secure cloud link."
                        />
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section style={{ padding: '3rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'var(--primary-light)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '4rem' }}>
                        <TrustItem icon={Award} text="FAA Part 107 Certified" />
                        <TrustItem icon={ShieldCheck} text="Fully Insured" />
                        <TrustItem icon={MapPin} text="Local to Connecticut" />
                    </div>
                </div>
            </section>
        </div >
    );
};

const TrustItem = ({ icon: Icon, text }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#fff' }}>
        <Icon size={32} color="var(--secondary)" />
        <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{text}</span>
    </div>
);

const StepCard = ({ number, title, description }) => (
    <div className="hover-card glass-panel" style={{ padding: '2rem', borderRadius: '12px', textAlign: 'left' }}>
        <div style={{ fontSize: '3rem', fontWeight: '800', color: 'rgba(255,255,255,0.05)', marginBottom: '-1rem' }}>{number}</div>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--accent)' }}>{title}</h3>
        <p style={{ color: 'var(--secondary)', lineHeight: '1.6' }}>{description}</p>
    </div>
);

export default Home;
