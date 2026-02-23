
import React, { useState } from 'react';

const PricingEngine = () => {
    const [isMember, setIsMember] = useState(false);

    return (
        <section id="pricing" className="py-32 bg-void relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-gold/20 to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Investment Protocols</h2>
                    <p className="text-gray-400">Clear, transparent pricing. No bloated agency retainers.</p>
                </div>

                <div className="max-w-4xl mx-auto bg-void border border-white/10 rounded-sm p-8 md:p-12 backdrop-blur-sm relative">
                    {/* Toggle Switch */}
                    <div className="relative flex flex-col items-center mb-12 mt-4">
                        {/* Tooltip to draw attention */}
                        {!isMember && (
                            <div className="absolute -top-10 md:-top-12 animate-bounce bg-primary-gold/10 border border-primary-gold text-primary-gold text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-sm shadow-[0_0_15px_rgba(255,215,0,0.2)] z-10 cursor-pointer" onClick={() => setIsMember(true)}>
                                Chamber or Association Member?
                            </div>
                        )}

                        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                            <span className={`text-sm font-medium tracking-wide transition-colors ${!isMember ? 'text-white drop-shadow-md' : 'text-gray-600'}`}>Standard Protocol</span>

                            <button
                                onClick={() => setIsMember(!isMember)}
                                className={`
                                    relative w-16 h-8 rounded-full border transition-all duration-300 focus:outline-none
                                    ${isMember ? 'bg-primary-gold/20 border-primary-gold shadow-[0_0_15px_rgba(255,215,0,0.3)]' : 'bg-white/5 border-white/20 hover:border-primary-gold/50'}
                                `}
                            >
                                <span
                                    className={`
                                        absolute top-1 left-1 w-5 h-5 rounded-full transition-all duration-300
                                        ${isMember ? 'translate-x-8 bg-primary-gold shadow-[0_0_10px_rgba(255,215,0,0.8)]' : 'translate-x-0 bg-gray-400'}
                                    `}
                                ></span>
                            </button>

                            <span className={`text-sm font-medium tracking-wide transition-colors ${isMember ? 'text-primary-gold drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]' : 'text-gray-600'}`}>
                                Local Alliance Member
                            </span>
                        </div>
                    </div>

                    {/* Pricing Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                        {/* Upfront */}
                        <div className="p-6 border border-white/5 bg-white/5 rounded-sm">
                            <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-2">Upfront Infrastructure</h3>
                            <div className="flex items-center justify-center space-x-1 mb-2 h-16">
                                <span className="text-4xl font-heading font-bold text-white transition-all duration-300">
                                    {isMember ? '$0.00' : '$1,999'}
                                </span>
                            </div>
                            {isMember && (
                                <span className="inline-block bg-primary-gold/10 text-primary-gold text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2 animate-pulse">
                                    Member Benefit
                                </span>
                            )}
                            <p className="text-xs text-gray-500">Design, Development, & Deployment</p>
                        </div>

                        {/* Monthly */}
                        <div className="p-6 border border-white/5 bg-white/5 rounded-sm">
                            <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-2">Monthly Maintenance</h3>
                            <div className="flex items-center justify-center space-x-1 mb-2 h-16">
                                <span className="text-4xl font-heading font-bold text-white transition-all duration-300">
                                    {isMember ? '$19.99' : '$79.99'}
                                </span>
                                <span className="text-sm text-gray-500 self-end mb-2">/mo</span>
                            </div>
                            {isMember && (
                                <span className="inline-block bg-primary-gold/10 text-primary-gold text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2 animate-pulse">
                                    Member Benefit
                                </span>
                            )}
                            <p className="text-xs text-gray-500">Hosting, Security, & Updates</p>
                        </div>
                    </div>

                    {/* ROI Guarantee */}
                    <div className="mt-8 text-center border-t border-white/10 pt-8">
                        <button className="w-full md:w-auto bg-primary-gold text-void font-heading font-bold px-8 py-4 rounded-sm hover:bg-white transition-colors">
                            Initialize Project
                        </button>
                        <p className="mt-4 text-xs text-gray-500">
                            *Active members of partner associations qualify for waived initialization fees.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingEngine;
