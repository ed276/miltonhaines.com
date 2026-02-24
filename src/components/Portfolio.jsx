import React, { useState } from 'react';

const Portfolio = () => {
    // We track which card is currently expanded
    const [expandedIds, setExpandedIds] = useState({});

    const toggleExpand = (id) => {
        setExpandedIds(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const clients = [
        {
            id: "danubia",
            name: "Danubia Cleaning LLC",
            category: "RECURRING SERVICE",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/f9bd7a5b-2f17-449b-0378-4417c72baa00/public",
            v2Image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/f9bd7a5b-2f17-449b-0378-4417c72baa00/public",
            status: "V2_LIVE",
            v2CompletedDate: "February 2026",
            link: "https://www.danubiallc.com",
            quoteSnippet: '"The team at MiltonHaines has been a pleasure to work with."',
            fullQuote: '"The team at MiltonHaines has been a pleasure to work with. The website has yielded great results. We book 1 to 2 jobs a week, and it has become one of my best marketing tools. Not having to make a big upfront investment made it an easy choice for us. Alex went above and beyond for me - even helping me deal with Google business listing when they were giving me problems. They are a great company to work with, and we love having the website."',
            annualCost: "$299.88",
            monthlyCost: "$24.99/mo",
            revenue: "$11,760",
            roi: "3,822%"
        },
        {
            id: "noriko",
            name: "Noriko's Nook",
            category: "NICHE EDUCATION",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/671d9a89-48fc-43ee-5a16-269f9aadd400/public",
            v2Image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/671d9a89-48fc-43ee-5a16-269f9aadd400/public",
            status: "V2_LIVE",
            v2CompletedDate: "February 2026",
            link: "https://www.norikosnook.com",
            quoteSnippet: '"I\'ve been working with MH for almost two years now, and it has been a happy experience."',
            fullQuote: '"I\'ve been working with MH for almost two years now, and it has been a happy experience. I have signed 10 new students, who meet me weekly to learn Japanese. I enjoy my website and am very excited to see my new one next year."',
            annualCost: "$299.88",
            monthlyCost: "$24.99/mo",
            revenue: "$33,800",
            roi: "11,171%"
        },
        {
            id: "ibhk",
            name: "I Believe / Hard Knox",
            category: "COMBAT SPORTS ACADEMY",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/5e94d87a-4f4a-4139-291a-a274ff1df000/public",
            v2Image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/5e94d87a-4f4a-4139-291a-a274ff1df000/public",
            status: "V2_LIVE",
            v2CompletedDate: "February 2026",
            link: "https://www.ibhkboxing.com",
            isPortfolioOnly: true,
            quoteSnippet: '"Transforming athletes through discipline and world-class training."',
            fullQuote: '"Our digital infrastructure perfectly matches the intensity and professionalism of our gym. It gives us a platform to properly showcase our champions and run our youth programs efficiently."'
        },
        {
            id: "iballroom",
            name: "iBallroomDanceR",
            category: "DANCE ACADEMY",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/599bbb76-7d4d-44ad-e2cd-d559c4aa3700/public",
            v2Image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/599bbb76-7d4d-44ad-e2cd-d559c4aa3700/public",
            status: "V2_LIVE",
            v2CompletedDate: "February 2026",
            link: "https://www.iballroomdancer.com",
            isPortfolioOnly: true,
            quoteSnippet: '"Elevating the online presence of competitive ballroom dance."',
            fullQuote: '"We needed a website that could handle a complex 3D carousel, sophisticated class schedules, and a high-end booking flow. MiltonHaines delivered a beautiful interactive experience."'
        }
    ];

    return (
        <section className="py-24 bg-void relative border-t border-white/5" id="portfolio">
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                        We Track Revenue, <span className="text-primary-gold">Not Just Clicks.</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Most web agencies can't tell you if their work made money. We can. Here is the audited performance data from our 18-month pilot program.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {clients.map((client) => {
                        const isExpanded = expandedIds[client.id];

                        return (
                            <div key={client.id} className="bg-milton-black/50 border border-white/10 rounded-sm overflow-hidden flex flex-col transition-all duration-300 hover:border-white/20">
                                {/* Image Container */}
                                {client.status === "V2_LIVE" ? (
                                    <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-void flex">
                                        {/* V1 Side */}
                                        <div className="w-1/2 relative group border-r border-white/10">
                                            <img
                                                src={client.image}
                                                alt={`${client.name} V1 Legacy`}
                                                className="object-cover w-full h-full opacity-50 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                                            />
                                            <div className="absolute top-4 left-4 bg-milton-black/80 px-2 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-widest backdrop-blur-sm border border-white/10">
                                                V1_LEGACY
                                            </div>
                                        </div>
                                        {/* V2 Side */}
                                        <div className="w-1/2 relative group">
                                            <img
                                                src={client.v2Image}
                                                alt={`${client.name} V2 Upgrade`}
                                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute top-4 right-4 bg-primary-gold/20 px-2 py-1 text-[10px] font-mono text-primary-gold uppercase tracking-widest backdrop-blur-sm border border-primary-gold/50 flex items-center shadow-[0_0_10px_rgba(255,215,0,0.2)]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary-gold mr-2 animate-pulse"></span>
                                                V2_DEPLOYED
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-void">
                                        <img
                                            src={client.image}
                                            alt={client.name}
                                            className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                                        />
                                    </div>
                                )}

                                {/* Content Container */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="text-[10px] font-mono text-primary-gold mb-4 uppercase tracking-widest font-bold">
                                        {client.category}
                                    </div>
                                    <a href={client.link} target="_blank" rel="noopener noreferrer" className="block text-2xl font-heading font-bold text-white mb-4 hover:text-primary-gold transition-colors duration-300">
                                        {client.name} <span className="text-sm border border-primary-gold/30 rounded px-2 py-0.5 ml-2 font-mono align-middle text-primary-gold/80 hover:bg-primary-gold/10">VIEW LIVE ↗</span>
                                    </a>

                                    <p className="text-gray-300 text-sm italic mb-6">
                                        {client.quoteSnippet}
                                    </p>

                                    <button
                                        onClick={() => toggleExpand(client.id)}
                                        className="text-primary-gold text-sm font-medium self-start focus:outline-none hover:text-white transition-colors mb-4 flex items-center"
                                    >
                                        {isExpanded ? '- Close' : '+ Read Full Story'}
                                    </button>

                                    {/* Expanded Content Area */}
                                    {isExpanded && (
                                        <div className="mt-2 mb-6 animate-fade-in">
                                            <p className="text-gray-400 text-sm leading-relaxed mb-8 italic">
                                                {client.fullQuote}
                                            </p>
                                        </div>
                                    )}

                                    {/* Spacer to push numbers to bottom if needed */}
                                    <div className="flex-grow"></div>

                                    {/* The Numbers / Project Details Box */}
                                    <div className="relative mt-4">
                                        {client.isPortfolioOnly ? (
                                            <div className="border border-white/5 p-6 rounded-sm space-y-4 pt-6 bg-white/5 h-full flex flex-col justify-center items-center">
                                                <div className="w-12 h-1 bg-primary-gold/30 mb-2"></div>
                                                <p className="text-gray-400 font-mono text-sm tracking-widest text-center uppercase">Digital Infrastructure</p>
                                                <p className="text-white/60 text-xs text-center border-t border-white/5 pt-4">Custom deployment explicitly honoring the unique technical and brand requirements of the client.</p>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-milton-black px-4 z-10">
                                                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">The Numbers</span>
                                                </div>
                                                <div className="border border-white/10 p-6 rounded-sm space-y-4 pt-8 bg-void/30">
                                                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                                        <span className="text-gray-400 text-sm">Annual Cost:</span>
                                                        <div className="text-right">
                                                            <span className="text-white font-bold text-lg">{client.annualCost}</span>
                                                            <span className="text-gray-600 text-xs ml-2">({client.monthlyCost} x 12)</span>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                                        <span className="text-gray-400 text-sm">Revenue Generated:</span>
                                                        <div className="text-right">
                                                            <span className="text-white font-bold text-lg">{client.revenue}</span>
                                                            {client.revenueContext && (
                                                                <span className="text-gray-500 text-xs ml-2">{client.revenueContext}</span>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between items-center">
                                                        <span className="text-gray-400 text-sm">ROI:</span>
                                                        <span className="text-primary-gold font-bold text-2xl">{client.roi}</span>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* Footer Note */}
                                {client.status === "V2_LIVE" ? (
                                    <div className="bg-primary-gold/5 border-t border-primary-gold/20 p-4 px-8 mt-auto flex items-center transition-colors">
                                        <span className="w-2 h-2 rounded-full bg-primary-gold mr-3 shadow-[0_0_8px_rgba(255,215,0,0.8)]"></span>
                                        <span className="text-gray-400 text-xs text-left">
                                            V2 Infrastructure Deployed: <span className="text-primary-gold font-bold">{client.v2CompletedDate}</span>
                                        </span>
                                    </div>
                                ) : (
                                    <div className="bg-void/80 border-t border-white/10 p-4 px-8 mt-auto flex items-center">
                                        <span className="w-2 h-2 rounded-full bg-primary-gold mr-3"></span>
                                        <span className="text-gray-500 text-xs text-left">
                                            Full Rebuild Scheduled: <span className="text-white font-bold">{client.scheduledRebuild}</span>
                                        </span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
