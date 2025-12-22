import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#020617', color: 'var(--secondary)', paddingTop: '5rem', paddingBottom: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
            {/* Background Glow Effect - Optional subtle aesthetic */}
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.3), transparent)' }}></div>

            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>

                    {/* Brand */}
                    <div>
                        <Link to="/" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
                            <h3 className="text-gradient" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Drone-Stuff</h3>
                        </Link>
                        <p style={{ marginBottom: '2rem', lineHeight: '1.7', color: '#94a3b8' }}>
                            Professional Drone Services, Training, and Security Solutions.
                            Elevating perspectives and ensuring safety across Connecticut with precision technology.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={18} /></a>
                            <a href="#" className="social-icon" aria-label="Instagram"><Instagram size={18} /></a>
                            <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontWeight: '600' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li><Link to="/" className="footer-link">Home</Link></li>
                            <li><Link to="/services" className="footer-link">Services</Link></li>
                            <li><Link to="/training" className="footer-link">Training</Link></li>
                            <li><Link to="/community" className="footer-link">Community</Link></li>
                            <li><Link to="/about" className="footer-link">About</Link></li>
                            <li><Link to="/contact" className="footer-link">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontWeight: '600' }}>Contact Info</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <MapPin size={20} color="var(--accent)" />
                                <span>Connecticut, USA</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Mail size={20} color="var(--accent)" />
                                <a href="mailto:info@drone-stuff.com" className="footer-link" style={{ marginLeft: 0 }}>info@drone-stuff.com</a>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <Mail size={20} color="var(--accent)" />
                                <a href="mailto:general@drone-stuff.com" className="footer-link" style={{ marginLeft: 0 }}>general@drone-stuff.com</a>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{
                                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                    border: '1px solid rgba(34, 197, 94, 0.3)',
                                    borderRadius: '20px',
                                    padding: '6px 12px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}>
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: '#22c55e',
                                        boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)'
                                    }}></div>
                                    <span style={{ color: '#22c55e', fontSize: '0.9rem', fontWeight: '600' }}>Available 24/7</span>
                                </div>
                            </li>
                        </ul>

                        {/* Mini Newsletter */}
                        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                            <h5 style={{ color: '#fff', marginBottom: '0.8rem', fontSize: '0.95rem' }}>Stay Updated</h5>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        padding: '10px 15px',
                                        borderRadius: '4px',
                                        color: '#fff',
                                        width: '100%',
                                        fontSize: '0.9rem',
                                        outline: 'none'
                                    }}
                                />
                                <button className="btn btn-primary" style={{ padding: '0 15px' }}>
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>&copy; {new Date().getFullYear()} Drone-Stuff. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem' }}>
                        <Link to="/privacy-policy" className="footer-link" style={{ marginLeft: 0 }}>Privacy Policy</Link>
                        <Link to="/terms-and-conditions" className="footer-link" style={{ marginLeft: 0 }}>Terms and Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
