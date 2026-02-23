import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyThisWorks = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(containerRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-void relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">Why This Works</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        See how our infrastructure-grade approach compares to traditional alternatives.
                    </p>
                </div>

                {/* Main Content Container - The "Cracked Box" */}
                <div ref={containerRef} className="max-w-6xl mx-auto bg-milton-black border border-white/10 rounded-sm relative p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">

                    {/* Decorative Corner Markers */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary-gold/50"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary-gold/50"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary-gold/50"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary-gold/50"></div>

                    {/* System Log Header */}
                    <div className="flex justify-end mb-8">
                        <div className="flex items-center space-x-2 text-xs font-mono text-primary-gold/80 animate-pulse">
                            <span className="w-2 h-2 rounded-full bg-primary-gold"></span>
                            <span>// SYSTEM_LOG: UPGRADE_REQUIRED</span>
                        </div>
                    </div>

                    {/* Main Headline */}
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                            Technology Aged.<br />
                            The Market <span className="text-primary-gold">Pivoted</span>.
                        </h3>
                        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                            Traditional sites were sold as assets but delivered as liabilities. Rather than spend thousands to overhaul broken, outdated pages, business owners redirected their focus to Social Media. <span className="text-white font-bold">Both were traps.</span>
                        </p>
                    </div>

                    {/* Vector Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/5 pt-12">

                        {/* Vector 01 */}
                        <div className="relative group">
                            <div className="text-[10px] font-mono text-gray-500 mb-4 uppercase tracking-widest">
                                // VECTOR_01: FINANCIAL
                            </div>
                            <h4 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-primary-gold transition-colors">
                                Financial Loss
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Billions in capital evaporated into sites that sit dormant. They cost thousands to build but lose value daily due to "Code Rot."
                            </p>
                            <div className="text-[10px] font-mono text-gray-500 pt-4 border-t border-white/5">
                                GLOBAL_STATUS: <span className="text-white">82% INACTIVE</span>
                            </div>
                        </div>

                        {/* Vector 02 */}
                        <div className="relative group">
                            <div className="text-[10px] font-mono text-gray-500 mb-4 uppercase tracking-widest">
                                // VECTOR_02: STRATEGIC
                            </div>
                            <h4 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-primary-gold transition-colors">
                                Rented Land
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Social media is a powerful channel, not a digital home. Profiles can't be owned, indexed, or leveraged as assets. They're rented real estate.
                            </p>
                            <div className="text-[10px] font-mono text-gray-500 pt-4 border-t border-white/5">
                                ASSET_EQUITY: <span className="text-white">ZERO EQUITY</span>
                            </div>
                        </div>

                        {/* Vector 03 */}
                        <div className="relative group">
                            <div className="text-[10px] font-mono text-gray-500 mb-4 uppercase tracking-widest">
                                // VECTOR_03: ENERGY
                            </div>
                            <h4 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-primary-gold transition-colors">
                                Infrastructure
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Bloated, abandoned sites clog global servers. Dead weight consumes electricity, degrades performance, and inflates costs.
                            </p>
                            <div className="text-[10px] font-mono text-gray-500 pt-4 border-t border-white/5">
                                EFFICIENCY: <span className="text-red-500">CRITICAL</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Conclusion */}
                <div className="text-center mt-16">
                    <p className="text-xl text-white font-heading font-medium">
                        MiltonHaines WebCraft exists to reverse this regression.
                    </p>
                    <p className="text-xl text-white font-heading mt-2">
                        We build <span className="text-primary-gold font-bold">Active Infrastructure</span>. See the gap below.
                    </p>
                </div>

            </div>
        </section >
    );
};

export default WhyThisWorks;
