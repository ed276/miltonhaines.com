import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TraditionalSeo = () => {
    const sectionRef = useRef(null);
    const meterRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Metrics Cards
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });

            // Animate "Speed" Meter Line
            gsap.from(meterRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                width: "0%",
                duration: 1.5,
                ease: "power2.inOut"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const metrics = [
        { label: "Core Web Vitals", value: "PASSED", status: "good" },
        { label: "Mobile Usability", value: "100%", status: "good" },
        { label: "SSL Security", value: "ACTIVE", status: "good" },
        { label: "Architecture", value: "SEMANTIC", status: "neutral" }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-white text-milton-black relative overflow-hidden border-b border-gray-200">
            {/* Subtle Grid Background for "Technical" look */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 border-b border-gray-300 pb-8">
                    <div>
                        <div className="inline-flex items-center space-x-2 bg-void text-white text-xs font-mono mb-4 px-3 py-1 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse"></span>
                            <span>SYSTEM_STATUS: OPTIMAL</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-void leading-tight">
                            Traditional SEO: <br />
                            <span className="text-terminal-green">Built for Today's Search.</span>
                        </h2>
                    </div>
                    <p className="text-gray-600 text-lg max-w-md mt-6 md:mt-0 text-right md:text-left">
                        While others chase algorithms, we build speed. Google rewards infrastructure, not tricks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                            className="bg-gray-50 border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 group"
                        >
                            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">{metric.label}</h4>
                            <div className="flex items-center space-x-3">
                                <span className={`text-3xl font-heading font-bold ${metric.status === 'good' ? 'text-terminal-green' : 'text-void'}`}>
                                    {metric.value}
                                </span>
                                {metric.status === 'good' && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-terminal-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )}
                            </div>
                            <div className="w-full h-1 bg-gray-200 mt-4 rounded-full overflow-hidden">
                                <div className={`h-full ${metric.status === 'good' ? 'bg-terminal-green' : 'bg-milton-black'} w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Speed Meter Visualization */}
                <div className="bg-milton-black text-white p-8 md:p-12 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-64 w-64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-8 md:mb-0">
                            <h3 className="text-2xl font-heading font-bold mb-2">Agency-Grade Technical SEO</h3>
                            <p className="text-gray-400 text-sm max-w-sm">
                                Creating the foundation that $5,000/mo agencies charge to "audit". We bake it in.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="flex justify-between text-xs font-mono text-gray-500 mb-2">
                                <span>CORE_WEB_VITALS // SPEED</span>
                                <span className="text-terminal-green">SUB-SECOND (ELITE)</span>
                            </div>
                            <div className="w-full h-4 bg-void rounded-full overflow-hidden border border-white/10">
                                <div ref={meterRef} className="h-full bg-gradient-to-r from-primary-gold to-terminal-green w-[95%]"></div>
                            </div>
                            <div className="flex justify-between text-[10px] font-mono text-gray-600 mt-1">
                                <span>SLOW</span>
                                <span>FAST</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TraditionalSeo;
