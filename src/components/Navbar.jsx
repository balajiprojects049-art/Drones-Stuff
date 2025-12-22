import React, { useState, useEffect } from 'react'; // added useEffect
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Training', path: '/training' },
    { name: 'Community', path: '/community' },
    { name: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      transition: 'all 0.3s ease',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Link to="/" className="logo">
          <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.5px' }}>Drone-Stuff</span>
        </Link>
        <style>{`
          .desktop-menu .nav-link {
            color: var(--text-light);
            font-weight: 500;
            font-size: 0.95rem;
          }
          .desktop-menu .active {
            color: var(--accent);
          }
          .desktop-menu .active::after {
            width: 100%;
          }
        `}</style>
        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: window.innerWidth > 768 ? 'flex' : 'none', alignItems: 'center', gap: '2rem' }}>
          <style>{`@media (max-width: 768px) { .desktop-menu { display: none !important; } }`}</style>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
            Get a Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'none' }}>
          <style>{`@media (max-width: 768px) { .mobile-toggle { display: block !important; } }`}</style>
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', color: '#fff' }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 'var(--nav-height)',
              left: 0,
              width: '100%',
              height: 'calc(100vh - var(--nav-height))',
              backgroundColor: 'var(--primary)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: location.pathname === link.path ? 'var(--accent)' : '#fff',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  paddingBottom: '1rem'
                }}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
