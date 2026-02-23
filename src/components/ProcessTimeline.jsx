
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DecryptText = ({ text, className }) => {
    const [displayText, setDisplayText] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

    useEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: elementRef.current,
            start: "top 85%",
            onEnter: () => setIsVisible(true),
            once: true
        });
        return () => trigger.kill();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let iterations = 0;
        const interval = setInterval(() => {
            setDisplayText(text.split('').map((char, index) => {
                if (index < iterations) {
                    return text[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            }).join(''));

            if (iterations >= text.length) {
                clearInterval(interval);
            }
            iterations += 1 / 3; // Slow down the reveal
        }, 30);

        return () => clearInterval(interval);
    }, [isVisible, text]);

    return (
        <span ref={elementRef} className={className}>
            {displayText || text.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join('')}
        </span>
    );
};


const ProcessTimeline = () => {
    const steps = [
        {
            title: "Discovery & Intake",
            step: "01",
            description: "We gather precise information about your business and goals so the build starts from a clear architectural plan. We identify your services, customers, constraints, and priorities so the structure is based on requirements, not guesswork.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/9fa6a373-e4ff-43be-282f-d1ecf2881300/public"
        },
        {
            title: "Architecture & Build",
            step: "02",
            description: "Your site is constructed with production-grade, plugin-free code engineered for speed and long-term stability. Semantic HTML, clean hierarchy, no theme bloat—built like infrastructure for predictable behavior and easy updates.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/29416b42-3864-4a7d-6cf2-6dec578d4400/public"
        },
        {
            title: "Optimization & Launch",
            step: "03",
            description: "We structure your site for both search engines and modern AI discovery systems. Semantic markup, schema, optimized headings, and content formats AI models can interpret. Then, we deploy on enterprise-grade hosting with full security checks.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/cbdbe925-bc90-4207-f259-1e2ff34d9500/public"
        },
        {
            title: "Active Management",
            step: "04",
            description: "We provide Quarterly Care to apply targeted updates that keep your site secure and accurate. Plus, every two years, you receive a Full Redesign—a complete visual and structural overhaul to ensure your digital presence is always a positive reflection of your brand.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/c6802be5-524e-49e5-1604-01a96d62d800/public"
        },
        {
            title: "The Results",
            step: "05",
            description: "A living digital asset that grows with you. No technical debt, no performance degradation, just consistent, high-performance infrastructure that serves your business goals day after day.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/9ad3859b-e39a-448c-9c59-7b199022a300/public"
        }
    ];

    // Note: Adjusted to 5 steps based on available assets and logical grouping.
    // Step 3 combines "SEO" & "Launch".
    // Step 4 combines "Quarterly" & "Redesign".
    // Step 5 acts as the summary/conclusion since we have 5 visual slots.

    return (
        <section id="process" className="py-24 bg-milton-black relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Our Process</h2>
                    <p className="text-gray-400">Systematic execution. Predictable results.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-gold/50 to-transparent"></div>

                    <div className="space-y-24">
                        {steps.map((item, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>

                                {/* Image Side */}
                                <div className="w-full md:w-1/2 px-8">
                                    <div className="relative group perspective-1000">
                                        <div className={`absolute -inset-2 bg-gradient-to-r ${index % 2 === 0 ? 'from-primary-gold/20 to-transparent' : 'from-transparent to-primary-gold/20'} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                        <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-2 group-hover:scale-105">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-1/2 px-8 mt-8 md:mt-0 text-center md:text-left">
                                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                                        <span className="text-6xl font-black text-white/5 font-heading absolute -mt-12 select-none pointer-events-none">
                                            {item.step}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 relative z-10 min-h-[40px]">
                                            <DecryptText text={item.title} />
                                        </h3>
                                        <div className={`h-1 w-20 bg-primary-gold mb-6 ${index % 2 === 0 ? '' : 'md:self-end'}`}></div>

                                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
