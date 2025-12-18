import React, { useState } from 'react';
import { X } from 'lucide-react';

// All images captured by our professional drone pilots
const images = [
    {
        src: "/images/gallery/DJI_0007.JPG",
        category: "Aerial Survey",
        caption: "Landscape Documentation"
    },
    {
        src: "/images/gallery/DJI_0486.JPG",
        category: "Aerial Photography",
        caption: "High-Altitude Capture"
    },
    {
        src: "/images/gallery/DJI_0533 2.JPG",
        category: "Infrastructure",
        caption: "Urban Development Survey"
    },
    {
        src: "/images/gallery/DJI_0573.JPG",
        category: "Aerial Mapping",
        caption: "Terrain Analysis"
    },
    {
        src: "/images/gallery/DJI_0586.JPG",
        category: "Construction",
        caption: "Project Site Overview"
    },
    {
        src: "/images/gallery/DJI_0670.JPG",
        category: "Environmental",
        caption: "Natural Landscape Study"
    },
    {
        src: "/images/gallery/DJI_0869.JPG",
        category: "Real Estate",
        caption: "Property Aerial View"
    },
    {
        src: "/images/gallery/DJI_20240526204642_0029_D 2.JPG",
        category: "Evening Shoot",
        caption: "Sunset Documentation"
    },
    {
        src: "/images/gallery/DJI_20240526204827_0030_D.JPG",
        category: "Twilight",
        caption: "Golden Hour Capture"
    },
    {
        src: "/images/gallery/DJI_20240601105214_0033_D.JPG",
        category: "Daytime Survey",
        caption: "Midday Reconnaissance"
    },
    {
        src: "/images/gallery/DJI_20240604171003_0087_D.JPG",
        category: "Infrastructure",
        caption: "Development Monitoring"
    },
    {
        src: "/images/gallery/DJI_20240607085340_0112_D.JPG",
        category: "Morning Shoot",
        caption: "Early Morning Survey"
    },
    {
        src: "/images/gallery/DJI_20240612211853_0168_D.JPG",
        category: "Night Photography",
        caption: "Low Light Capture"
    },
    {
        src: "/images/gallery/DJI_20240629171326_0424_D.JPG",
        category: "Landscape",
        caption: "Geographical Documentation"
    },
    {
        src: "/images/gallery/GOPR1914.JPG",
        category: "Action Cam",
        caption: "Dynamic Perspective"
    },
    {
        src: "/images/gallery/HYPERLAPSE_0098.JPG",
        category: "Hyperlapse",
        caption: "Time-Lapse Sequence"
    },
    {
        src: "/images/gallery/PANO_0001.JPG",
        category: "Panorama",
        caption: "360° Landscape View"
    },
    {
        src: "/images/gallery/PANO_0001 2.JPG",
        category: "Panorama",
        caption: "Wide Angle Vista"
    },
    {
        src: "/images/gallery/PANO_0004.JPG",
        category: "Panorama",
        caption: "Comprehensive Site View"
    },
    {
        src: "/images/gallery/PANO_0008.JPG",
        category: "Panorama",
        caption: "Full Horizon Capture"
    },
    {
        src: "/images/gallery/PANO_0012.JPG",
        category: "Panorama",
        caption: "Expansive Landscape"
    },
    {
        src: "/images/gallery/dji_export_20241005_131221_1728148341785_sphere_screenshot.jpg",
        category: "360° Sphere",
        caption: "Interactive Virtual Tour"
    },
    {
        src: "/images/gallery/dji_export_20241005_131232_1728148352709_sphere_screenshot.jpg",
        category: "360° Sphere",
        caption: "Immersive Aerial View"
    },
    {
        src: "/images/gallery/dji_export_20241005_131236_1728148356787_sphere_screenshot.jpg",
        category: "360° Sphere",
        caption: "Spherical Panorama"
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
