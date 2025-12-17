import React, { useState } from 'react';
import { X } from 'lucide-react';

const images = [
    {
        src: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=800&q=80",
        category: "Infrastructure",
        caption: "Bridge Inspection & Survey"
    },
    {
        src: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=800&q=80",
        category: "Training",
        caption: "Professional Pilot Training"
    },
    {
        src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80",
        category: "Nature",
        caption: "Environmental Monitoring"
    },
    {
        src: "https://images.unsplash.com/photo-1506947411487-a56738267384?w=800&q=80",
        category: "Creative",
        caption: "Cinematic Event Coverage"
    }
];

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="hover-card img-hover-zoom"
                        onClick={() => setSelectedImg(img)}
                        style={{
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            aspectRatio: '3/4', // Taller portrait aspect ratio looks more modern
                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                        }}
                    >
                        <img
                            src={img.src}
                            alt={img.caption}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />

                        {/* Gradient Overlay */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(2, 6, 23, 0.9) 0%, rgba(2, 6, 23, 0.5) 30%, transparent 60%)',
                        }}></div>

                        {/* Content */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            padding: '1.5rem',
                            zIndex: 10
                        }}>
                            <span className="glass-panel" style={{
                                fontSize: '0.75rem',
                                color: '#fbbf24',
                                textTransform: 'uppercase',
                                fontWeight: '700',
                                padding: '6px 12px',
                                borderRadius: '100px',
                                display: 'inline-block',
                                marginBottom: '0.8rem',
                                border: '1px solid rgba(251, 191, 36, 0.3)',
                                background: 'rgba(251, 191, 36, 0.1)'
                            }}>
                                {img.category}
                            </span>
                            <h3 style={{
                                margin: 0,
                                fontSize: '1.25rem',
                                fontWeight: '600',
                                color: '#fff',
                                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                            }}>
                                {img.caption}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImg && (
                <div
                    onClick={() => setSelectedImg(null)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2000,
                        padding: '2rem'
                    }}
                >
                    <button
                        style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', color: '#fff', cursor: 'pointer' }}
                    >
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImg.src}
                        alt={selectedImg.caption}
                        style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: '4px' }}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default Gallery;
