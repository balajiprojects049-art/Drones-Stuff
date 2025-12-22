import React from 'react';
import { FileText, Shield, AlertTriangle, Copyright } from 'lucide-react';

const TermsAndConditions = () => {
    return (
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '5rem', minHeight: '100vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Terms and Conditions</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: '#94a3b8', fontSize: '1.1rem' }}>
                        Please read these terms and conditions carefully before using appropriate services offered by Drone-Stuff.
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
                            <FileText size={24} color="var(--accent)" />
                            1. Introduction
                        </h2>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                            Welcome to Drone-Stuff ("Company", "we", "our", "us"). These Terms and Conditions ("Terms", "Terms of Service") govern your use of our website located at drone-stuff.com (together or individually "Service") operated by Drone-Stuff.
                            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#f8fafc', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Copyright size={24} color="var(--accent)" />
                            2. Intellectual Property & Copyrights
                        </h2>
                        <div style={{ padding: '1.5rem', backgroundColor: 'rgba(249, 115, 22, 0.05)', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
                            <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1rem' }}>
                                The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Drone-Stuff and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
                            </p>
                            <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '1rem' }}>
                                <strong>Strict Copyright Enforcement:</strong> All digital media, including but not limited to aerial footage, photography, course materials, and training modules, are the sole intellectual property of Drone-Stuff. Unauthorized reproduction, distribution, public display, or commercial use of our content without express written permission is strictly prohibited and will be pursued to the fullest extent of the law under the Digital Millennium Copyright Act (DMCA) and other applicable United States copyright laws.
                            </p>
                            <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                                Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Drone-Stuff.
                            </p>
                        </div>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#f8fafc', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <Shield size={24} color="var(--accent)" />
                            3. Usage Restrictions
                        </h2>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                            You agree not to use the Service:
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: '#cbd5e1', lineHeight: '1.7', marginTop: '0.5rem' }}>
                            <li>In any way that violates any applicable national or international law or regulation.</li>
                            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
                            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#f8fafc', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <AlertTriangle size={24} color="var(--accent)" />
                            4. Limitation of Liability
                        </h2>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                            In no event shall Drone-Stuff, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                        </p>
                    </div>

                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ color: '#f8fafc', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <FileText size={24} color="var(--accent)" />
                            5. Governing Law
                        </h2>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                            These Terms shall be governed and construed in accordance with the laws of the State of Connecticut, United States, without regard to its conflict of law provisions.
                        </p>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginTop: '1rem' }}>
                            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.
                        </p>
                    </div>

                    <div>
                        <h2 style={{ color: '#f8fafc', fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <FileText size={24} color="var(--accent)" />
                            6. Changes to Terms
                        </h2>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                        </p>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginTop: '1rem' }}>
                            By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions;
