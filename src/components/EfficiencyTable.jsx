
import React from 'react';

const EfficiencyTable = () => {
    return (
        <section id="roi" className="py-24 bg-void relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">The Efficiency Mandate</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Data-driven performance comparison. Why our infrastructure model mathematically outperforms the market.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Traditional Agency */}
                    <div className="bg-milton-black border border-white/5 rounded-sm p-8 text-center relative overflow-hidden group hover:border-white/10 transition-colors">
                        <div className="text-[10px] font-mono text-gray-500 mb-4 uppercase tracking-widest">// THE_DINOSAUR</div>
                        <h3 className="text-xl font-heading font-bold text-white mb-8 group-hover:text-gray-300 transition-colors">Traditional Agency</h3>

                        <div className="space-y-6">
                            <div className="border-b border-white/5 pb-4">
                                <span className="block text-xs text-gray-500 uppercase font-mono mb-1">Upfront Capital</span>
                                <span className="text-lg text-white font-medium">$3,500 – $5,000+</span>
                            </div>
                            <div className="border-b border-white/5 pb-4">
                                <span className="block text-xs text-gray-500 uppercase font-mono mb-1">Deployment Time</span>
                                <span className="text-lg text-white font-medium">6 – 12 Weeks</span>
                            </div>
                            <div className="border-b border-white/5 pb-4">
                                <span className="block text-xs text-gray-500 uppercase font-mono mb-1">Security & Hosting</span>
                                <span className="text-lg text-white font-medium">Varies / Extra Cost</span>
                            </div>
                            <div className="border-b border-white/5 pb-4">
                                <span className="block text-xs text-gray-500 uppercase font-mono mb-1">Ongoing Maintenance</span>
                                <span className="text-lg text-white font-medium">$100 – $300/mo</span>
                            </div>
                            <div className="pt-2">
                                <span className="block text-xs text-gray-500 uppercase font-mono mb-1">Asset Ownership</span>
                                <span className="text-lg text-white font-medium">Owned By Client</span>
                            </div>
                        </div>
                    </div>

                    {/* DIY Builders */}
                    <div className="bg-milton-black border border-white/5 rounded-sm p-8 text-center relative overflow-hidden group hover:border-white/10 transition-colors">
                        <div className="text-[10px] font-mono text-gray-500 mb-4 uppercase tracking-widest">// THE_TRAP</div>
                        <h3 className="text-xl font-heading font-bold text-white mb-8 group-hover:text-gray-300 transition-colors">DIY Builders (Wix, SqSp)</h3>

                        <div className="space-y-6">
                            <div className="border-b border-white/5 pb-4">
                                <span className="block text-xs text-gray-500 uppercase font-mono mb-1">Upfront Capital</span>
                                <span className="text-lg text-white font-medium">$0 – $300</span>
                            </div>
                            <div className="border-b border-white/5 pb-4">
                                <span className="block text-xs text-gray-500 uppercase font-mono mb-1">Deployment Time</span>
                                <span className="text-lg text-white font-medium">Infinite (Never finish)</span>
                            </div>
                            <div className="border-b border-white/5 pb-4">
                                <span className="block text-xs text-gray-500 uppercase font-mono mb-1">Security & Hosting</span>
                                <span className="text-lg text-white font-medium">Basic Shared Server</span>
                            </div>
                            <div className="border-b border-white/5 pb-4">
                                <span className="block text-xs text-gray-500 uppercase font-mono mb-1">Ongoing Maintenance</span>
                                <span className="text-lg text-white font-medium">You do it (Forever)</span>
                            </div>
                            <div className="pt-2">
                                <span className="block text-xs text-gray-500 uppercase font-mono mb-1">Asset Ownership</span>
                                <span className="text-lg text-red-400 font-medium">Rented (Platform Lock-in)</span>
                            </div>
                        </div>
                    </div>

                    {/* MiltonHaines Active Infrastructure */}
                    <div className="bg-milton-black/80 border border-primary-gold p-8 text-center relative overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.1)] transform md:-translate-y-4">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-primary-gold/5 to-transparent pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-16 h-16 bg-primary-gold/10 blur-xl"></div>

                        <div className="flex justify-center items-center space-x-2 text-[10px] font-mono text-terminal-green mb-4 uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse"></span>
                            <span>ACTIVE_NODE</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-primary-gold mb-8">MiltonHaines WebCraft</h3>

                        <div className="space-y-6 relative z-10">
                            <div className="border-b border-white/10 pb-4">
                                <span className="block text-xs text-gray-400 uppercase font-mono mb-1">Upfront Capital</span>
                                <span className="text-xl text-white font-bold">$0.00 (Members)</span>
                            </div>
                            <div className="border-b border-white/10 pb-4">
                                <span className="block text-xs text-gray-400 uppercase font-mono mb-1">Deployment Time</span>
                                <span className="text-xl text-white font-bold">5 – 7 Days</span>
                            </div>
                            <div className="border-b border-white/10 pb-4">
                                <span className="block text-xs text-gray-400 uppercase font-mono mb-1">Security & Hosting</span>
                                <span className="text-xl text-white font-bold">Enterprise Edge (PQC)</span>
                            </div>
                            <div className="border-b border-white/10 pb-4">
                                <span className="block text-xs text-gray-400 uppercase font-mono mb-1">Ongoing Maintenance</span>
                                <span className="text-xl text-white font-bold">Included (Managed)</span>
                            </div>
                            <div className="pt-2">
                                <span className="block text-xs text-gray-400 uppercase font-mono mb-1">Asset Ownership</span>
                                <span className="text-xl text-primary-gold font-bold">100% Client Owned</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EfficiencyTable;
