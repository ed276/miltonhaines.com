
import React, { useState } from 'react';

const QnAModal = ({ isOpen, onClose }) => {
    const [mode, setMode] = useState('MEMBER_ACCESS'); // MEMBER_ACCESS vs NON-MEMBER_PROTOCOL

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-void/90 backdrop-blur-md" onClick={onClose}></div>

            <div className="relative w-full max-w-3xl bg-void border border-primary-gold/20 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
                    <div className="flex items-center space-x-4">
                        <h3 className="text-xl font-heading font-bold text-white">Protocol Query Interface</h3>
                        <div className="flex bg-black/50 rounded p-1">
                            <button
                                onClick={() => setMode('MEMBER_ACCESS')}
                                className={`text-[10px] font-mono uppercase px-3 py-1 rounded transition-colors ${mode === 'MEMBER_ACCESS' ? 'bg-primary-gold text-void font-bold' : 'text-gray-500 hover:text-white'}`}
                            >
                                Member_Access
                            </button>
                            <button
                                onClick={() => setMode('NON-MEMBER_PROTOCOL')}
                                className={`text-[10px] font-mono uppercase px-3 py-1 rounded transition-colors ${mode === 'NON-MEMBER_PROTOCOL' ? 'bg-gray-700 text-white font-bold' : 'text-gray-500 hover:text-white'}`}
                            >
                                Non-Member_Protocol
                            </button>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-white">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto">
                    {mode === 'MEMBER_ACCESS' ? (
                        <div className="space-y-6">
                            <div className="border border-primary-gold/10 bg-primary-gold/5 p-6 rounded-sm">
                                <h4 className="text-primary-gold font-bold mb-2 flex items-center">
                                    <span className="w-2 h-2 bg-primary-gold rounded-full mr-2"></span>
                                    How do I claim my member benefit?
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Simply select "Industry Association/Chamber Member" in the pricing engine. Our system will verify your active status with your local chamber directory upon initialization. The $1,999 fee is waived instantly.
                                </p>
                            </div>
                            <div className="border border-primary-gold/10 bg-primary-gold/5 p-6 rounded-sm">
                                <h4 className="text-primary-gold font-bold mb-2 flex items-center">
                                    <span className="w-2 h-2 bg-primary-gold rounded-full mr-2"></span>
                                    What connects to my domain?
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    We handle the DNS propagation. You retain 100% ownership of your domain name. We simply point the A-Record to our enterprise-grade infrastructure.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="border border-white/10 bg-white/5 p-6 rounded-sm">
                                <h4 className="text-white font-bold mb-2 flex items-center">
                                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                    What if I'm not a chamber member?
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Standard protocol applies. You receive the same enterprise-grade build, security, and maintenance. The $1,999 initialization fee covers the architectural setup and manual QA process.
                                </p>
                            </div>
                            <div className="border border-white/10 bg-white/5 p-6 rounded-sm">
                                <h4 className="text-white font-bold mb-2 flex items-center">
                                    <span className="w-2 h-2 bg-gray-500 rounded-full mr-2"></span>
                                    Can I edit the site myself?
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Yes. We provide a simplified CMS (Content Management System) for text and image updates. For structural changes, our team handles the code to prevent "Code Rot."
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-white/10 bg-black/50 flex justify-between items-center text-xs text-gray-500 font-mono">
                    <span>SYS_READY</span>
                    <span>ENCRYPTION: AES-256</span>
                </div>
            </div>
        </div>
    );
};

export default QnAModal;
