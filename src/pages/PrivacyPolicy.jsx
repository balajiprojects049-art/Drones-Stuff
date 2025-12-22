import React from 'react';
import { Shield, Lock, Eye, FileText, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '5rem', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Privacy Policy</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: '#94a3b8', fontSize: '1.1rem' }}>
                        Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information at Drone-Stuff.
                    </p>
                </div>

                <div
                    className="glass-card"
                    style={{
                        padding: '3rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        backgroundColor: 'rgba(2, 6, 23, 0.7)'
                    }}
                >
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#f8fafc', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Eye size={24} color="var(--accent)" />
                            1. Information We Collect
                        </h2>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1rem' }}>
                            We collect diverse types of information to provide and improve our Service to you.
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#cbd5e1', lineHeight: '1.7' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to: Email address, First name and last name, Phone number, Address, State, Province, ZIP/Postal code, City.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#f8fafc', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <FileText size={24} color="var(--accent)" />
                            2. Use of Data
                        </h2>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                            Drone-Stuff uses the collected data for various purposes:
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#cbd5e1', lineHeight: '1.7', marginTop: '0.5rem' }}>
                            <li>To provide and maintain the Service</li>
                            <li>To notify you about changes to our Service</li>
                            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                            <li>To provide customer care and support</li>
                            <li>To provide analysis or valuable information so that we can improve the Service</li>
                            <li>To monitor the usage of the Service</li>
                            <li>To detect, prevent and address technical issues</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#f8fafc', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Lock size={24} color="var(--accent)" />
                            3. Security of Data
                        </h2>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#f8fafc', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Globe size={24} color="var(--accent)" />
                            4. Third-Party Services
                        </h2>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                            We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ color: '#f8fafc', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Shield size={24} color="var(--accent)" />
                            5. Children's Privacy
                        </h2>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                            Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
