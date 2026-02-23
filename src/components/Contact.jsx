import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const [formState, setFormState] = useState('idle'); // idle, sending, success
    const [isChamberMember, setIsChamberMember] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const card = cardRef.current;

        if (!container || !card) return;

        const handleMouseMove = (e) => {
            const { left, top, width, height } = container.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            // Calculate rotation (max 5 degrees)
            const rotateX = (0.5 - y) * 10;
            const rotateY = (x - 0.5) * 10;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: "power2.out",
                transformPerspective: 1000
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('sending');

        // Simulate network request
        setTimeout(() => {
            setFormState('success');
        }, 2000);
    };

    return (
        <section id="contact" className="py-32 bg-void relative overflow-hidden flex items-center justify-center min-h-screen">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-milton-black via-void to-void z-0"></div>
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 items-center">

                {/* Left Side: The "Brief" */}
                <div className="w-full md:w-1/2 text-left space-y-8">
                    <div>
                        <div className="inline-flex items-center space-x-2 text-terminal-green text-xs font-mono mb-4 border border-terminal-green/30 px-2 py-1 rounded bg-terminal-green/5">
                            <span className="animate-pulse w-2 h-2 rounded-full bg-terminal-green"></span>
                            <span>CHANNEL_OPEN</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
                            Ready to Build <br />
                            <span className="text-primary-gold">Infrastructure?</span>
                        </h2>
                    </div>

                    <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                        Stop renting. Start owning. Initialize your project request below to begin the architectural assessment.
                    </p>

                    <div className="space-y-4 pt-4 border-t border-white/10">
                        <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 text-primary-gold">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Speed</h4>
                                <p className="text-gray-500 text-xs">Response within 24 hours</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-white/10 text-primary-gold">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Security</h4>
                                <p className="text-gray-500 text-xs">End-to-end encrypted</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: The Terminal Form */}
                <div ref={containerRef} className="w-full md:w-1/2 perspective-1000">
                    <div
                        ref={cardRef}
                        className="bg-milton-black/80 backdrop-blur-xl border border-primary-gold/30 rounded-lg p-8 md:p-10 shadow-[0_0_50px_rgba(255,215,0,0.1)] relative overflow-hidden transform-style-3d group"
                    >
                        {/* Decorative HUD Elements */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-gold/50 to-transparent"></div>
                        <div className="absolute bottom-4 right-4 text-[10px] text-primary-gold/30 font-mono">ID: UPLINK_77A</div>

                        {formState === 'success' ? (
                            <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-6">
                                <div className="w-20 h-20 rounded-full bg-terminal-green/20 border border-terminal-green flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-terminal-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-heading font-bold text-white mb-2">Protocol Initiated</h3>
                                    <p className="text-gray-400">Transmission received. Stand by for contact.</p>
                                </div>
                                <button
                                    onClick={() => setFormState('idle')}
                                    className="text-primary-gold text-sm hover:text-white transition-colors underline underline-offset-4"
                                >
                                    Send another transmission
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="space-y-2">
                                    <label className="block text-xs font-mono text-primary-gold/70 uppercase tracking-widest">
                                        Identity // Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-void/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors font-mono placeholder-white/20"
                                        placeholder="ENTER_NAME"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-xs font-mono text-primary-gold/70 uppercase tracking-widest">
                                        Comms // Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-void/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors font-mono placeholder-white/20"
                                        placeholder="ENTER_EMAIL_ADDRESS"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-xs font-mono text-primary-gold/70 uppercase tracking-widest">
                                        Objective // Project Vector
                                    </label>
                                    <select className="w-full bg-void/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors font-mono appearance-none">
                                        <option>New Build Infrastructure</option>
                                        <option>System Redesign</option>
                                        <option>Maintenance Request</option>
                                        <option>General Inquiry</option>
                                    </select>
                                </div>

                                {/* Chamber Member Checkbox */}
                                <div className="space-y-4 border border-white/10 rounded p-4 bg-void/30">
                                    <label className="flex items-center space-x-3 cursor-pointer group">
                                        <div className="relative flex items-center justify-center w-5 h-5 border border-white/30 rounded bg-transparent group-hover:border-primary-gold transition-colors">
                                            <input
                                                type="checkbox"
                                                className="absolute inset-0 opacity-0 cursor-pointer"
                                                checked={isChamberMember}
                                                onChange={(e) => setIsChamberMember(e.target.checked)}
                                            />
                                            {isChamberMember && (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-primary-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors uppercase tracking-wider">
                                            Local Alliance / Chamber Member
                                        </span>
                                    </label>

                                    {isChamberMember && (
                                        <div className="pt-2">
                                            <label className="block text-xs font-mono text-primary-gold/70 uppercase tracking-widest mb-2">
                                                Verification // Alliance Name
                                            </label>
                                            <input
                                                type="text"
                                                name="chamber_name"
                                                className="w-full bg-void/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors font-mono placeholder-white/20"
                                                placeholder="ENTER_CHAMBER_OR_ASSOCIATION"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-xs font-mono text-primary-gold/70 uppercase tracking-widest">
                                        Payload // Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        required
                                        className="w-full bg-void/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary-gold transition-colors font-mono placeholder-white/20 resize-none"
                                        placeholder="ENTER_DATA_PACKET..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formState === 'sending'}
                                    className="w-full bg-primary-gold text-void font-bold font-heading uppercase tracking-widest py-4 rounded hover:bg-white transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,215,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {formState === 'sending' ? (
                                        <>
                                            <span className="animate-spin rounded-full h-4 w-4 border-2 border-void border-t-transparent mr-2"></span>
                                            Transmitting...
                                        </>
                                    ) : (
                                        'Initiate Protocol'
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
