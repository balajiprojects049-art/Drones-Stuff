import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, link, ctaText }) => {
    return (
        <div
            className="hover-card glass-panel"
            style={{
                padding: '2rem',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <div style={{
                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                width: 'fit-content',
                padding: '12px',
                borderRadius: '8px',
                marginBottom: '1.5rem'
            }}>
                <Icon size={32} color="var(--accent)" />
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{title}</h3>
            <p style={{ color: 'var(--secondary)', marginBottom: 'auto', lineHeight: '1.6' }}>{description}</p>

            <Link to={link} style={{
                marginTop: '1.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--accent)',
                fontWeight: '600'
            }}>
                {ctaText} <ArrowRight size={18} />
            </Link>
        </div>
    );
};

export default ServiceCard;
