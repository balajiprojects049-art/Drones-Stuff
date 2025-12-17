import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQData = [
    {
        question: "Are you fully insured for commercial operations?",
        answer: "Yes, we carry extensive aviation liability insurance. We can provide a Certificate of Insurance (COI) issuing your company as an additional insured upon request."
    },
    {
        question: "Can you fly near airports or in cities?",
        answer: "Yes. As FAA Part 107 certified pilots, we can apply for airspace authorizations to operate in controlled airspace (near airports) and urban environments, provided it is safe to do so."
    },
    {
        question: "What happens if the weather is bad on the shoot day?",
        answer: "Safety and image quality are our priorities. If wind, rain, or low visibility prevents flight, we will reschedule your mission to the next available slot at no additional cost."
    },
    {
        question: "Do you deliver raw footage or edited videos?",
        answer: "We offer both. Our standard packages include color-graded, ready-to-use media, but we are happy to provide the raw D-Log/RAW files for your own post-production team."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Common Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {FAQData.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: 'var(--primary-light)',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        <button
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            style={{
                                width: '100%',
                                padding: '1.5rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: 'none',
                                color: '#fff',
                                border: 'none',
                                cursor: 'pointer',
                                textAlign: 'left'
                            }}
                        >
                            <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>{item.question}</span>
                            {activeIndex === index ? <Minus size={20} color="var(--accent)" /> : <Plus size={20} color="var(--accent)" />}
                        </button>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--secondary)', lineHeight: '1.6' }}>
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
