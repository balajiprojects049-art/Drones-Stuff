import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'Drone Services Quote', // Default
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '9b399468-75ef-4942-92f0-4e75022f3e92',
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: `Drone-Stuff: ${formData.subject}`,
                    message: formData.message,
                    from_name: 'Drone-Stuff Website',
                    to: 'info@drone-stuff.com'
                })
            });

            const data = await response.json();

            if (data.success) {
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: 'Drone Services Quote',
                    message: ''
                });
            } else {
                throw new Error(data.message || 'Something went wrong');
            }
        } catch (err) {
            setError('Failed to send message. Please try again or email us directly at info@drone-stuff.com');
            console.error('Form submission error:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div style={{ paddingTop: 'var(--nav-height)', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="container"
                >
                    <div className="glass-panel" style={{ padding: '3rem', borderRadius: '16px', inlineSize: 'fit-content', margin: '0 auto' }}>
                        <h2 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Message Sent!</h2>
                        <p style={{ color: 'var(--secondary)' }}>Thank you for contacting Drone-Stuff. We will get back to you shortly.</p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="btn btn-primary"
                            style={{ marginTop: '2rem' }}
                        >
                            Send Another Message
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: 'var(--nav-height)' }}>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '50vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(rgba(2, 6, 23, 0.75), rgba(2, 6, 23, 0.85)), url("/images/contact-hero.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: 'var(--nav-height)',
                marginBottom: '4rem'
            }}>
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>Get In Touch</h1>
                    <p style={{ fontSize: '1.3rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
                        Ready to elevate your project? Contact us for a custom quote or to discuss your aerial imaging and training needs. We respond within 24 hours.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
                        {/* Form */}
                        <form onSubmit={handleSubmit} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '3rem', borderRadius: '16px' }}>
                            <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '1rem' }}>Send us a Message</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                <InputGroup label="Name" name="name" type="text" value={formData.name} onChange={handleChange} required />
                                <InputGroup label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                <InputGroup label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: '500' }}>Interest</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        style={{
                                            padding: '12px',
                                            backgroundColor: 'var(--primary-light)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            borderRadius: '8px',
                                            color: '#fff',
                                            outline: 'none',
                                            fontSize: '1rem'
                                        }}
                                    >
                                        <option value="Drone Services Quote">Drone Services Quote</option>
                                        <option value="Drone Training">Drone Training</option>
                                        <option value="Security Consultation">Security Consultation</option>
                                        <option value="Community Corps Info">Community Corps Info</option>
                                        <option value="General Question">General Question</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: '500' }}>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    style={{
                                        padding: '12px',
                                        backgroundColor: 'var(--primary-light)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        outline: 'none',
                                        fontSize: '1rem',
                                        resize: 'vertical'
                                    }}
                                />
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div style={{
                                    padding: '1rem',
                                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                    borderRadius: '8px',
                                    color: '#ef4444',
                                    fontSize: '0.95rem'
                                }}>
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ marginTop: '1rem' }}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                {!isSubmitting && <Send size={18} style={{ marginLeft: '0.5rem' }} />}
                            </button>
                        </form>
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                        <p style={{ color: 'var(--secondary)' }}>
                            Alternative Contact Info: <a href="mailto:info@drone-stuff.com" style={{ color: 'var(--accent)' }}>info@drone-stuff.com</a>
                        </p>
                    </div>
                </div>
            </section >
        </div >
    );
};

const InputGroup = ({ label, name, type, value, onChange, required }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: '500' }}>{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            style={{
                padding: '12px',
                backgroundColor: 'var(--primary-light)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: '#fff',
                outline: 'none',
                fontSize: '1rem',
                width: '100%'
            }}
        />
    </div>
);

export default Contact;
