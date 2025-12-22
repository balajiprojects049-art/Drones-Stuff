import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Plane, CheckCircle } from 'lucide-react';

const Training = () => {
    return (
        <div style={{ paddingTop: 'var(--nav-height)' }}>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(rgba(2, 6, 23, 0.7), rgba(2, 6, 23, 0.8)), url("/images/training-field.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: 'var(--nav-height)'
            }}>
                <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>Become a Certified, Confident Drone Pilot</h1>
                    <p style={{ fontSize: '1.3rem', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
                        Learn to fly safely, legally, and skillfully. Our training is hands-on, personalized, and designed to make you a proficient pilot ready for recreational or commercial operations.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {/* Recreational Track */}
                        <div className="track-card hover-card glass-panel" style={{ padding: '2.5rem', borderRadius: '16px' }}>
                            <Plane size={48} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Recreational Pilot Training</h3>
                            <p style={{ color: 'var(--secondary)', marginBottom: '2rem' }}>
                                Perfect for new drone owners and hobbyists. This session includes preparation for and administration of the mandatory FAA TRUST certificate. Get started on the right foot.
                            </p>
                            <div style={{ marginTop: 'auto' }}>
                                <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Curriculum Highlights:</h4>
                                <ul style={{ spaceY: '1rem', color: '#cbd5e1' }}>
                                    <li style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}><CheckCircle size={20} color="var(--accent)" /> Drone Setup & Registration</li>
                                    <li style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}><CheckCircle size={20} color="var(--accent)" /> Basic Flight Maneuvers</li>
                                    <li style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}><CheckCircle size={20} color="var(--accent)" /> Safety & Emergency Rules</li>
                                    <li style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}><CheckCircle size={20} color="var(--accent)" /> FAA TRUST Certification</li>
                                </ul>
                            </div>
                        </div>

                        {/* Commercial Track */}
                        <div className="track-card hover-card glass-panel" style={{ padding: '2.5rem', borderRadius: '16px', border: '2px solid var(--accent)' }}>
                            <GraduationCap size={48} color="var(--accent)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Part 107 Test Prep & Commercial Training</h3>
                            <p style={{ color: 'var(--secondary)', marginBottom: '2rem' }}>
                                For entrepreneurs, realtors, inspectors, and anyone pursuing a commercial drone license. We focus on the knowledge and practical skills needed to pass the FAA exam and operate a successful business.
                            </p>
                            <div style={{ marginTop: 'auto' }}>
                                <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Full Part 107 Curriculum:</h4>
                                <ul style={{ spaceY: '1rem', color: '#cbd5e1' }}>
                                    <li style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}><CheckCircle size={20} color="var(--accent)" /> Airspace Classifications</li>
                                    <li style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}><CheckCircle size={20} color="var(--accent)" /> Aviation Weather (METAR/TAF)</li>
                                    <li style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}><CheckCircle size={20} color="var(--accent)" /> Sectional Chart Reading</li>
                                    <li style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}><CheckCircle size={20} color="var(--accent)" /> Radio Communications</li>
                                    <li style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}><CheckCircle size={20} color="var(--accent)" /> Business Operations 101</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="section" style={{ backgroundColor: 'var(--primary-light)' }}>
                <div className="container">
                    <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>What's Included in Your Training</h2>
                    <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Every training session is comprehensive, personalized, and designed to give you real-world confidence.
                    </p>

                    {/* Training Equipment Image */}
                    <div className="hover-card img-hover-zoom" style={{ maxWidth: '1000px', margin: '0 auto 3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)' }}>
                        <img
                            src="/images/training-equipment.png"
                            alt="Professional drone training equipment and controller"
                            style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <div className="hover-card glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent)' }}>Equipment Provided</h3>
                            <p style={{ color: 'var(--secondary)', lineHeight: '1.7' }}>
                                Training drones, controllers, tablets, spare batteries, and all safety equipment. You can also train on your own drone if you prefer.
                            </p>
                        </div>
                        <div className="hover-card glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent)' }}>Study Materials</h3>
                            <p style={{ color: 'var(--secondary)', lineHeight: '1.7' }}>
                                Comprehensive study guides, practice exams, checklists, and access to online resources for continued learning and reference.
                            </p>
                        </div>
                        <div className="hover-card glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent)' }}>Post-Training Support</h3>
                            <p style={{ color: 'var(--secondary)', lineHeight: '1.7' }}>
                                Email support for questions after your session, exam registration assistance, and guidance on purchasing your first drone.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Demonstrations Section */}
            <section className="section" style={{ backgroundColor: 'var(--bg-dark)' }}>
                <div className="container">
                    <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Professional Flight Demonstrations</h2>
                    <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
                        Watch real examples of advanced drone techniques captured by our FAA Part 107 Certified instructor. Each video showcases the skills and techniques you'll master in our training programs.
                    </p>

                    <div style={{ display: 'grid', gap: '3rem' }}>
                        {/* Video 1: High-Speed Tracking */}
                        <div className="hover-card glass-panel" style={{ padding: '2rem', borderRadius: '16px', overflow: 'hidden' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                                <div>
                                    <video
                                        src="https://res.cloudinary.com/dm7eowl2p/video/upload/v1766071220/40_MPH_Aerial_High_Tech_Track_and_Trace_Test_1_de6fs0.mp4"
                                        controls
                                        style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                                    />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--accent)' }}>40 MPH High-Speed Tracking</h3>
                                    <div style={{ color: 'var(--secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        <p style={{ marginBottom: '1rem' }}>
                                            <strong style={{ color: '#fff' }}>Drone Used:</strong> DJI Mavic 3 Pro
                                        </p>
                                        <p style={{ marginBottom: '1rem' }}>
                                            <strong style={{ color: '#fff' }}>Flight Mode:</strong> Sport Mode with ActiveTrack 5.0
                                        </p>
                                        <p style={{ marginBottom: '1rem' }}>
                                            <strong style={{ color: '#fff' }}>Altitude:</strong> 30-50 feet AGL (Above Ground Level)
                                        </p>
                                        <p style={{ marginBottom: '1rem' }}>
                                            <strong style={{ color: '#fff' }}>Speed:</strong> 40 MPH sustained tracking
                                        </p>
                                    </div>
                                    <div className="glass-panel" style={{ padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
                                        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', margin: 0, lineHeight: '1.6' }}>
                                            <strong style={{ color: 'var(--accent)' }}>What You'll Learn:</strong> Advanced subject tracking, maintaining smooth gimbal movement at high speeds, adjusting to rapid directional changes, and using intelligent flight modes for professional results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Video 2: Eagles in Flight */}
                        <div className="hover-card glass-panel" style={{ padding: '2rem', borderRadius: '16px', overflow: 'hidden' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                                <div style={{ order: 2 }}>
                                    <video
                                        src="https://res.cloudinary.com/dm7eowl2p/video/upload/v1766071216/3Eagles_in_Flight_1_1_nejpth.mp4"
                                        controls
                                        style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                                    />
                                </div>
                                <div style={{ order: 1 }}>
                                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--accent)' }}>Eagles in Flight - Wildlife Documentation</h3>
                                    <div style={{ color: 'var(--secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        <p style={{ marginBottom: '1rem' }}>
                                            <strong style={{ color: '#fff' }}>Drone Used:</strong> DJI Air 3 (Dual Camera System)
                                        </p>
                                        <p style={{ marginBottom: '1rem' }}>
                                            <strong style={{ color: '#fff' }}>Camera Settings:</strong> 4K 60fps, 70mm telephoto lens
                                        </p>
                                        <p style={{ marginBottom: '1rem' }}>
                                            <strong style={{ color: '#fff' }}>Distance:</strong> 150+ feet from subjects (wildlife safe)
                                        </p>
                                        <p style={{ marginBottom: '1rem' }}>
                                            <strong style={{ color: '#fff' }}>Technique:</strong> Hover and observe, minimal movement
                                        </p>
                                    </div>
                                    <div className="glass-panel" style={{ padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
                                        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', margin: 0, lineHeight: '1.6' }}>
                                            <strong style={{ color: 'var(--accent)' }}>What You'll Learn:</strong> Wildlife photography ethics, telephoto shooting techniques, maintaining safe distances, reading animal behavior, and using environmental awareness to capture natural moments without disturbance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Video 3: Cinematic Footage */}
                        <div className="hover-card glass-panel" style={{ padding: '2rem', borderRadius: '16px', overflow: 'hidden' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                                <div>
                                    <video
                                        src="https://res.cloudinary.com/dm7eowl2p/video/upload/v1766071210/2F6AFF38-CF17-451D-9652-C07328EE1E9B_libetf.mov"
                                        controls
                                        muted
                                        style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                                    />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--accent)' }}>Cinematic Aerial Footage</h3>
                                    <div style={{ color: 'var(--secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                        <p style={{ marginBottom: '1rem' }}>
                                            <strong style={{ color: '#fff' }}>Drone Used:</strong> DJI Mini 4 Pro
                                        </p>
                                        <p style={{ marginBottom: '1rem' }}>
                                            <strong style={{ color: '#fff' }}>Camera Settings:</strong> 4K 30fps, D-Log color profile
                                        </p>
                                        <p style={{ marginBottom: '1rem' }}>
                                            <strong style={{ color: '#fff' }}>Flight Pattern:</strong> Smooth ascending orbit with gradual zoom
                                        </p>
                                        <p style={{ marginBottom: '1rem' }}>
                                            <strong style={{ color: '#fff' }}>Post-Processing:</strong> Color grading, stabilization, speed ramping
                                        </p>
                                    </div>
                                    <div className="glass-panel" style={{ padding: '1.2rem', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
                                        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', margin: 0, lineHeight: '1.6' }}>
                                            <strong style={{ color: 'var(--accent)' }}>What You'll Learn:</strong> Cinematic camera movements, manual exposure control, shooting in D-Log for professional color grading, coordinating multi-axis movements, and achieving broadcast-quality aerial footage.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem', textAlign: 'center', padding: '2rem', backgroundColor: 'rgba(249, 115, 22, 0.05)', borderRadius: '12px', border: '1px solid rgba(249, 115, 22, 0.2)' }}>
                        <p style={{ fontSize: '1.1rem', color: '#cbd5e1', margin: 0, lineHeight: '1.7' }}>
                            <strong style={{ color: 'var(--accent)' }}>All techniques demonstrated here are taught in our Part 107 Commercial Training program.</strong><br />
                            Learn the skills to capture professional-grade footage for real estate, events, construction, and creative projects.
                        </p>
                    </div>
                </div>
            </section>

            {/* Training Approach */}
            <section className="section" style={{ backgroundColor: 'var(--bg-dark)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Our Training Approach</h2>
                        <p style={{ textAlign: 'center', color: 'var(--secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                            We believe the best drone pilots are built through patient, practical, real-world instruction—not rushed classes or online-only courses.
                        </p>

                        {/* Hands-On Training Image */}
                        <div className="hover-card img-hover-zoom" style={{ marginBottom: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1200&h=500&fit=crop"
                                alt="Hands-on drone flight training session"
                                style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
                            />
                        </div>

                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <div className="hover-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ minWidth: '50px', height: '50px', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                    1
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Learn at Your Own Pace</h3>
                                    <p style={{ color: 'var(--secondary)', lineHeight: '1.7' }}>
                                        Sessions are scheduled flexibly and tailored to your learning speed. Whether you need 2 hours or 6, we adapt to ensure you're truly ready.
                                    </p>
                                </div>
                            </div>

                            <div className="hover-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ minWidth: '50px', height: '50px', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                    2
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Theory Meets Practice</h3>
                                    <p style={{ color: 'var(--secondary)', lineHeight: '1.7' }}>
                                        We don't just teach regulations—we show you how they apply in real scenarios. You'll fly in different conditions and practice emergency procedures hands-on.
                                    </p>
                                </div>
                            </div>

                            <div className="hover-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <div style={{ minWidth: '50px', height: '50px', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                    3
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Exam-Ready Confidence</h3>
                                    <p style={{ color: 'var(--secondary)', lineHeight: '1.7' }}>
                                        For Part 107 students, we focus heavily on the official FAA exam format with practice tests, test-taking strategies, and one-on-one review of challenging topics.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instructor Section */}
            <section className="section" style={{ backgroundColor: 'var(--primary-light)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                        {/* Instructor Image */}
                        <div className="hover-card img-hover-zoom" style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=faces"
                                alt="Professional drone pilot instructor"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '400px' }}
                            />
                        </div>

                        {/* Instructor Info */}
                        <div style={{ textAlign: 'center' }}>
                            <h2 className="text-gradient" style={{ marginBottom: '1.5rem' }}>Learn from a Certified Professional</h2>
                            <p style={{ color: 'var(--secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.7' }}>
                                Your instructor is an FAA Part 107 Certified Remote Pilot with extensive commercial flight experience across multiple industries—real estate, construction, events, and security operations.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                                <div className="hover-card glass-panel" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '0.5rem' }}>500+</div>
                                    <p style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>Commercial Flight Hours</p>
                                </div>
                                <div className="hover-card glass-panel" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '0.5rem' }}>100%</div>
                                    <p style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>FAA Exam Pass Rate</p>
                                </div>
                                <div className="hover-card glass-panel" style={{ padding: '1.5rem', borderRadius: '12px' }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '0.5rem' }}>5+</div>
                                    <p style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>Years Teaching Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scheduling & Duration */}
            <section className="section" style={{ backgroundColor: 'var(--bg-dark)' }}>
                <div className="container">
                    <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Flexible Scheduling & Session Details</h2>
                    <p style={{ textAlign: 'center', color: 'var(--secondary)', maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Training sessions are conducted in safe, open outdoor locations across Connecticut.
                    </p>

                    {/* Outdoor training image */}
                    <div className="hover-card img-hover-zoom" style={{ maxWidth: '1000px', margin: '0 auto 3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)' }}>
                        <img
                            src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1200&h=400&fit=crop"
                            alt="Outdoor drone training in open field"
                            style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="hover-card glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent)' }}>Session Length</h3>
                            <p style={{ color: 'var(--secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                                <strong style={{ color: '#fff' }}>Recreational Training:</strong> Typically 2-3 hours, single session
                            </p>
                            <p style={{ color: 'var(--secondary)', lineHeight: '1.7' }}>
                                <strong style={{ color: '#fff' }}>Part 107 Training:</strong> 6-10 hours total, split into 2-3 sessions over 1-2 weeks
                            </p>
                        </div>

                        <div className="hover-card glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent)' }}>Availability</h3>
                            <p style={{ color: 'var(--secondary)', lineHeight: '1.7', marginBottom: '1rem' }}>
                                Weekdays, evenings, and weekend sessions available. We work around your schedule.
                            </p>
                            <p style={{ color: 'var(--secondary)', lineHeight: '1.7' }}>
                                Training locations throughout Connecticut—outdoor fields or your location if suitable.
                            </p>
                        </div>

                        <div className="hover-card glass-panel" style={{ padding: '2rem', borderRadius: '12px' }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--accent)' }}>Weather Policy</h3>
                            <p style={{ color: 'var(--secondary)', lineHeight: '1.7' }}>
                                Safety first. If weather conditions aren't safe for training, we'll reschedule at no additional charge. You'll learn to assess weather like a professional pilot.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Student Outcomes */}
            <section className="section" style={{ backgroundColor: 'var(--primary-light)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>What You'll Walk Away With</h2>
                        <p style={{ textAlign: 'center', color: 'var(--secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                            Our goal isn't just to help you pass a test—it's to make you a safe, competent, and confident drone operator.
                        </p>

                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            <div className="hover-card glass-panel" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.5rem', borderRadius: '12px' }}>
                                <CheckCircle size={24} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Certification Readiness</h4>
                                    <p style={{ color: 'var(--secondary)', lineHeight: '1.6' }}>
                                        Recreational pilots leave with their FAA TRUST certificate. Part 107 students are fully prepared to pass the official FAA exam with confidence.
                                    </p>
                                </div>
                            </div>

                            <div className="hover-card glass-panel" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.5rem', borderRadius: '12px' }}>
                                <CheckCircle size={24} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Real Flight Skills</h4>
                                    <p style={{ color: 'var(--secondary)', lineHeight: '1.6' }}>
                                        Practical ability to fly, navigate, and handle your drone in various conditions. You'll know how to handle wind, GPS issues, and unexpected situations.
                                    </p>
                                </div>
                            </div>

                            <div className="hover-card glass-panel" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.5rem', borderRadius: '12px' }}>
                                <CheckCircle size={24} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Safety & Legal Knowledge</h4>
                                    <p style={{ color: 'var(--secondary)', lineHeight: '1.6' }}>
                                        Understanding of airspace, regulations, and safety protocols. You'll know where you can fly legally and how to operate responsibly.
                                    </p>
                                </div>
                            </div>

                            <div className="hover-card glass-panel" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.5rem', borderRadius: '12px' }}>
                                <CheckCircle size={24} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>Business Foundation (Part 107)</h4>
                                    <p style={{ color: 'var(--secondary)', lineHeight: '1.6' }}>
                                        Commercial pilots learn the basics of marketing drone services, pricing jobs, insurance requirements, and client management.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ textAlign: 'center' }}>
                <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Take control of the skies.</h2>
                <Link to="/contact" className="btn btn-primary">Schedule Your Training Session</Link>
            </section>
        </div>
    );
};

export default Training;
