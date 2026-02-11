
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const heroRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current.children, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Images */}
            <div className="absolute inset-0 z-0">
                {/* Mobile Background */}
                <img
                    src="https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/b8cf9901-4f14-40be-4fa3-1291232b4b00/public"
                    alt="Infrastructure Background"
                    className="absolute inset-0 w-full h-full object-cover md:hidden opacity-40 mix-blend-luminosity"
                />
                {/* Desktop Background */}
                <img
                    src="https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/e2bd3af3-64b9-4ce9-ebda-4e5f12650b00/public"
                    alt="Infrastructure Background"
                    className="absolute inset-0 w-full h-full object-cover hidden md:block opacity-40 mix-blend-luminosity"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-transparent"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div ref={textRef}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-8 leading-tight tracking-tight">
                        Built Like <span className="text-white">
                            Infrastructure
                        </span>.<br />
                        Priced for <span className="text-white">Main Street</span>.
                    </h1>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-12 leading-relaxed">
                        Making enterprise-level design accessible to Main Street businesses through consistent, clear, scalable builds.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <button className="w-full md:w-auto bg-primary-gold text-void font-heading font-bold px-8 py-4 rounded-sm hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                            Start Your Build
                        </button>
                        <button className="w-full md:w-auto border border-white/20 text-white font-heading font-medium px-8 py-4 rounded-sm hover:bg-white/5 transition-colors backdrop-blur-sm">
                            View Process
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-void to-transparent pointer-events-none"></div>
        </section>
    );
};

export default Hero;
