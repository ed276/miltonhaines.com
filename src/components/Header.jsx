
import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 backdrop-blur-[12px] bg-void/80 border-b border-primary-gold/10' : 'py-6 bg-transparent border-b border-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* LOGO CONTAINER */}
                <div className="perspective-[1000px] group h-10 w-[140px]"> {/* Fixed dimensions for the stage */}
                    <div className={`relative w-full h-full transition-all duration-700 ease-out transform-style-3d origin-center ${scrolled
                        ? 'rotate-x-0'
                        : 'rotate-x-90' /* Start rotated up */
                        }`}>

                        {/* FRONT FACE (The Logo) */}
                        <div className="absolute inset-0 bg-void border border-white/10 flex items-center justify-center backface-hidden translate-z-[20px]">
                            <img
                                src="https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/7c5be5e2-b40a-46e8-06d1-7ec8e7197900/public"
                                alt="MiltonHaines WebCraft"
                                className="h-8 w-auto object-contain"
                            />
                        </div>

                        {/* BOTTOM FACE (Gold) */}
                        <div className="absolute inset-0 bg-primary-gold h-10 w-full origin-bottom rotate-x-90 translate-y-[20px] translate-z-[20px] brightness-75"></div>

                        {/* TOP FACE (Darker Void) */}
                        <div className="absolute inset-0 bg-black h-10 w-full origin-top -rotate-x-90 -translate-y-[20px] translate-z-[20px]"></div>

                        {/* BACK FACE (Hidden) */}
                        <div className="absolute inset-0 bg-void border border-white/10 rotate-y-180 translate-z-[20px]"></div>
                    </div>
                </div>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
                    {['What\'s Included', 'Process', 'SEO + AI', 'Pricing', 'ROI'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/ /g, '-').replace(/[^a-z-]/g, '')}`}
                            className="text-gray-300 hover:text-primary-gold transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <button className="hidden md:block relative overflow-hidden group border border-primary-gold px-6 py-2 rounded-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                    <div className="absolute inset-0 w-full h-full bg-primary-gold/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <span className="relative font-heading font-semibold text-primary-gold text-xs tracking-wider uppercase">Start Your Build</span>
                </button>

                {/* MOBILE MENU BUTTON (Placeholder) */}
                <button className="md:hidden text-primary-gold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
