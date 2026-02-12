
import React, { useState, useEffect } from 'react';
import LogoCanvas from './LogoCanvas';

const Header = () => {
    const [headerOpacity, setHeaderOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Sync with LogoCanvas: 0 to 400px (More runway for larger logo)
            const limit = 400;
            const progress = Math.min(Math.max(window.scrollY / limit, 0), 1);
            setHeaderOpacity(progress);
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate dynamic styles
    const isScrolled = headerOpacity > 0.1;
    const bgStyle = {
        backgroundColor: `rgba(5, 5, 5, ${headerOpacity * 0.9})`, // Fade to void/90
        backdropFilter: `blur(${headerOpacity * 12}px)`,
        borderBottomColor: `rgba(255, 215, 0, ${headerOpacity * 0.1})`
    };

    return (
        <header
            style={bgStyle}
            className={`fixed top-0 w-full z-50 transition-all duration-100 ${isScrolled ? 'py-4' : 'py-6'} border-b border-transparent`
            }>
            <div className="container mx-auto px-6 flex justify-between items-center transition-all duration-300">
                {/* LOGO CONTAINER */}
                <a href="#" className="group h-40 w-auto overflow-hidden rounded-sm relative block mix-blend-screen">
                    <LogoCanvas />
                </a>

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
