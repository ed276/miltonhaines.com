
import React from 'react';

const EfficiencyTable = () => {
    return (
        <section id="roi" className="py-32 bg-void relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Efficiency Mandate</h2>
                    <p className="text-gray-400">Data-driven performance comparison.</p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-4 border-b border-white/10 text-gray-500 font-medium">Metric</th>
                                <th className="p-4 border-b border-white/10 text-gray-500 font-medium w-1/4">Traditional Agency</th>
                                <th className="p-4 border-b border-white/10 text-gray-500 font-medium w-1/4">DIY Builders</th>
                                <th className="p-4 border-b border-primary-gold bg-primary-gold/10 text-primary-gold font-bold w-1/4 relative">
                                    MiltonHaines
                                    <div className="absolute top-0 right-0 -mt-1 -mr-1 w-2 h-2 bg-primary-gold rounded-full animate-ping"></div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr>
                                <td className="p-4 border-b border-white/5 text-white font-medium">Upfront Cost</td>
                                <td className="p-4 border-b border-white/5 text-gray-400">$3,500 – $5,000+</td>
                                <td className="p-4 border-b border-white/5 text-gray-400">$0 – $300</td>
                                <td className="p-4 border-b border-primary-gold/30 bg-primary-gold/5 text-white font-bold">$0.00 (Members)</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-white/5 text-white font-medium">Launch Time</td>
                                <td className="p-4 border-b border-white/5 text-gray-400">6 – 12 Weeks</td>
                                <td className="p-4 border-b border-white/5 text-gray-400">Infinite (Never finish)</td>
                                <td className="p-4 border-b border-primary-gold/30 bg-primary-gold/5 text-white font-bold">5 – 7 Days</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-white/5 text-white font-medium">Security</td>
                                <td className="p-4 border-b border-white/5 text-gray-400">Varies / Extra Cost</td>
                                <td className="p-4 border-b border-white/5 text-gray-400">Basic SSL</td>
                                <td className="p-4 border-b border-primary-gold/30 bg-primary-gold/5 text-white font-bold">Enterprise Edge (PQC Ready)</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-white/5 text-white font-medium">Maintenance</td>
                                <td className="p-4 border-b border-white/5 text-gray-400">$100 – $300/mo</td>
                                <td className="p-4 border-b border-white/5 text-gray-400">You do it (Forever)</td>
                                <td className="p-4 border-b border-primary-gold/30 bg-primary-gold/5 text-white font-bold">Included (Managed)</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-white/5 text-white font-medium">Asset Ownership</td>
                                <td className="p-4 border-b border-white/5 text-gray-400">owned by Client</td>
                                <td className="p-4 border-b border-white/5 text-gray-400">Rented (Platform Lock-in)</td>
                                <td className="p-4 border-b border-primary-gold/30 bg-primary-gold/5 text-white font-bold">100% Client Owned</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default EfficiencyTable;
