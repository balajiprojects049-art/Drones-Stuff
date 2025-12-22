import React, { useState } from 'react';
import { X, Play } from 'lucide-react';

// All images and videos captured by our professional drone pilots
const mediaItems = [
    // Videos - Hosted on Cloudinary CDN
    {
        type: "video",
        src: "https://res.cloudinary.com/dm7eowl2p/video/upload/v1766071220/40_MPH_Aerial_High_Tech_Track_and_Trace_Test_1_de6fs0.mp4",
        category: "Action Video",
        caption: "40 MPH High-Speed Tracking"
    },
    {
        type: "video",
        src: "https://res.cloudinary.com/dm7eowl2p/video/upload/v1766071216/3Eagles_in_Flight_1_1_nejpth.mp4",
        category: "Wildlife Video",
        caption: "Eagles In Flight"
    },
    {
        type: "video",
        src: "https://res.cloudinary.com/dm7eowl2p/video/upload/v1766071210/2F6AFF38-CF17-451D-9652-C07328EE1E9B_libetf.mov",
        category: "Aerial Video",
        caption: "Cinematic Drone Footage"
    },
    // Images
    {
        type: "image",
        src: "/images/gallery/DJI_0007.JPG",
        category: "Aerial Survey",
        caption: "Landscape Documentation"
    },
    {
        type: "image",
        src: "/images/gallery/DJI_0486.JPG",
        category: "Aerial Photography",
        caption: "High-Altitude Capture"
    },
    {
        type: "image",
        src: "/images/gallery/DJI_0533 2.JPG",
        category: "Infrastructure",
        caption: "Urban Development Survey"
    },
    {
        type: "image",
        src: "/images/gallery/DJI_0573.JPG",
        category: "Aerial Mapping",
        caption: "Terrain Analysis"
    },
    {
        type: "image",
        src: "/images/gallery/DJI_0586.JPG",
        category: "Construction",
        caption: "Project Site Overview"
    },
    {
        type: "image",
        src: "/images/gallery/DJI_0670.JPG",
        category: "Environmental",
        caption: "Natural Landscape Study"
    },
    {
        type: "image",
        src: "/images/gallery/DJI_0869.JPG",
        category: "Real Estate",
        caption: "Property Aerial View"
    },
    {
        type: "image",
        src: "/images/gallery/DJI_20240526204642_0029_D 2.JPG",
        category: "Evening Shoot",
        caption: "Sunset Documentation"
    },
    {
        type: "image",
        src: "/images/gallery/DJI_20240526204827_0030_D.JPG",
        category: "Twilight",
        caption: "Golden Hour Capture"
    },
    {
        type: "image",
        src: "/images/gallery/DJI_20240601105214_0033_D.JPG",
        category: "Daytime Survey",
        caption: "Midday Reconnaissance"
    },
    {
        type: "image",
        src: "/images/gallery/DJI_20240604171003_0087_D.JPG",
        category: "Infrastructure",
        caption: "Development Monitoring"
    },
    {
        type: "image",
        src: "/images/gallery/DJI_20240607085340_0112_D.JPG",
        category: "Morning Shoot",
        caption: "Early Morning Survey"
    },
    {
        type: "image",
        src: "/images/gallery/DJI_20240612211853_0168_D.JPG",
        category: "Night Photography",
        caption: "Low Light Capture"
    },
    {
        type: "image",
        src: "/images/gallery/DJI_20240629171326_0424_D.JPG",
        category: "Landscape",
        caption: "Geographical Documentation"
    },
    {
        type: "image",
        src: "/images/gallery/GOPR1914.JPG",
        category: "Action Cam",
        caption: "Dynamic Perspective"
    },
    {
        type: "image",
        src: "/images/gallery/HYPERLAPSE_0098.JPG",
        category: "Hyperlapse",
        caption: "Time-Lapse Sequence"
    },
    {
        type: "image",
        src: "/images/gallery/PANO_0001.JPG",
        category: "Panorama",
        caption: "360° Landscape View"
    },
    {
        type: "image",
        src: "/images/gallery/PANO_0001 2.JPG",
        category: "Panorama",
        caption: "Wide Angle Vista"
    },
    {
        type: "image",
        src: "/images/gallery/PANO_0004.JPG",
        category: "Panorama",
        caption: "Comprehensive Site View"
    },
    {
        type: "image",
        src: "/images/gallery/PANO_0008.JPG",
        category: "Panorama",
        caption: "Full Horizon Capture"
    },
    {
        type: "image",
        src: "/images/gallery/PANO_0012.JPG",
        category: "Panorama",
        caption: "Expansive Landscape"
    },
    {
        type: "image",
        src: "/images/gallery/dji_export_20241005_131221_1728148341785_sphere_screenshot.jpg",
        category: "360° Sphere",
        caption: "Interactive Virtual Tour"
    },
    {
        type: "image",
        src: "/images/gallery/dji_export_20241005_131232_1728148352709_sphere_screenshot.jpg",
        category: "360° Sphere",
        caption: "Immersive Aerial View"
    },
    {
        type: "image",
        src: "/images/gallery/dji_export_20241005_131236_1728148356787_sphere_screenshot.jpg",
        category: "360° Sphere",
        caption: "Spherical Panorama"
    }
];

const Gallery = () => {
    const [selectedMedia, setSelectedMedia] = useState(null);

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {mediaItems.map((item, index) => (
                    <div
                        key={index}
                        className="hover-card img-hover-zoom"
                        onClick={() => setSelectedMedia(item)}
                        style={{
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            aspectRatio: '3/4',
                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                        }}
                    >
                        {/* Media Content - Image or Video Thumbnail */}
                        {item.type === 'video' ? (
                            <video
                                src={item.src}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                muted
                            />
                        ) : (
                            <img
                                src={item.src}
                                alt={item.caption}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        )}

                        {/* Play Icon for Videos */}
                        {item.type === 'video' && (
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: 'rgba(251, 191, 36, 0.9)',
                                borderRadius: '50%',
                                width: '70px',
                                height: '70px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 8px 20px rgba(251, 191, 36, 0.4)',
                                transition: 'transform 0.3s ease',
                                zIndex: 5
                            }}>
                                <Play size={36} color="#020617" fill="#020617" />
                            </div>
                        )}

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
                                {item.category}
                            </span>
                            <h3 style={{
                                margin: 0,
                                fontSize: '1.25rem',
                                fontWeight: '600',
                                color: '#fff',
                                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                            }}>
                                {item.caption}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal for Images and Videos */}
            {selectedMedia && (
                <div
                    onClick={() => setSelectedMedia(null)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2000,
                        padding: '2rem'
                    }}
                >
                    <button
                        style={{
                            position: 'absolute',
                            top: '2rem',
                            right: '2rem',
                            background: 'rgba(251, 191, 36, 0.2)',
                            border: '2px solid #fbbf24',
                            color: '#fbbf24',
                            cursor: 'pointer',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(251, 191, 36, 0.9)';
                            e.currentTarget.style.color = '#020617';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(251, 191, 36, 0.2)';
                            e.currentTarget.style.color = '#fbbf24';
                        }}
                    >
                        <X size={32} />
                    </button>

                    {selectedMedia.type === 'video' ? (
                        <video
                            src={selectedMedia.src}
                            controls
                            autoPlay
                            muted={selectedMedia.caption === "Cinematic Drone Footage"}
                            style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: '8px' }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    ) : (
                        <img
                            src={selectedMedia.src}
                            alt={selectedMedia.caption}
                            style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: '8px' }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default Gallery;
