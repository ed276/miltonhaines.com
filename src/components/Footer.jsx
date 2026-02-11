
import React from 'react';

const Footer = ({ onOpenQnA }) => {
    return (
        <footer className="relative bg-void border-t border-white/10 pt-20 pb-10 overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/a7a2630b-cc56-4ebc-8237-406ae7d2d400/public')] bg-cover bg-center mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/90 to-transparent z-10"></div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="h-8 w-8 bg-gradient-to-br from-primary-gold to-yellow-600 rounded-sm flex items-center justify-center">
                                <span className="font-heading font-black text-void text-xs">MH</span>
                            </div>
                            <span className="text-white font-heading font-bold">MILTONHAINES</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Constructing digital infrastructure for the modern enterprise. Built to last. Optimized for growth.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-heading">Navigation</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-primary-gold transition-colors">What's Included</a></li>
                            <li><a href="#" className="hover:text-primary-gold transition-colors">Our Process</a></li>
                            <li><a href="#" className="hover:text-primary-gold transition-colors">Pricing Protocol</a></li>
                            <li><a href="#" className="hover:text-primary-gold transition-colors">System ROI</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-heading">Legal</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-primary-gold transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary-gold transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary-gold transition-colors">SLA Agreement</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-heading">System Status</h4>
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-green"></span>
                            </span>
                            <span className="text-terminal-green text-xs font-mono">ALL SYSTEMS OPERATIONAL</span>
                        </div>
                        <button
                            onClick={onOpenQnA}
                            className="text-white text-xs border border-white/20 px-4 py-2 rounded-sm hover:bg-white/5 transition-colors"
                        >
                            Open Query Interface
                        </button>
                        <div className="mt-4 text-[10px] text-gray-600 font-mono">
                            PQC (POST-QUANTUM CRYPTOGRAPHY) READY
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} MiltonHaines WebCraft. All rights reserved.</p>
                    <p className="font-mono">EST. 2024 // V.2.1.0</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
