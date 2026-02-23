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
            id: "loftus",
            name: "Loftus Elite Roofing",
            category: "CONSTRUCTION & TRADES",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/7e119676-cb9f-42d9-b6c3-5be8fec4ca00/public",
            quoteSnippet: '"I operated for 25 years without a website."',
            fullQuote: '"I operated for 25 years without a website. We\'ve always made it a point to deliver for our clients, and as a result, have always received enough referral business to avoid outside marketing costs. After speaking with MiltonHaines, and hearing their offer to build our website for free, and only pay a low fee to maintain and manage it, I thought it couldn\'t hurt anything to give it a try. We don\'t pay for ads, and we still get a few leads a month from the site, and have booked three new jobs over the past year. For 240 bucks a year, it\'s a no-brainer. We couldn\'t be happier with the results."',
            annualCost: "$239.88",
            monthlyCost: "$19.99/mo",
            revenue: "$9,500",
            roi: "3,864%",
            scheduledRebuild: "January 2026"
        },
        {
            id: "danubia",
            name: "Danubia Cleaning LLC",
            category: "RECURRING SERVICE",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/a51ecdc5-dc37-480e-5e4e-41e33fc04600/public",
            quoteSnippet: '"The team at MiltonHaines has been a pleasure to work with."',
            fullQuote: '"The team at MiltonHaines has been a pleasure to work with. The website has yielded great results. We book 1 to 2 jobs a week, and it has become one of my best marketing tools. Not having to make a big upfront investment made it an easy choice for us. Alex went above and beyond for me - even helping me deal with Google business listing when they were giving me problems. They are a great company to work with, and we love having the website."',
            annualCost: "$239.88",
            monthlyCost: "$19.99/mo",
            revenue: "$11,760",
            roi: "4,804%",
            scheduledRebuild: "March 2026"
        },
        {
            id: "noriko",
            name: "Noriko's Nook",
            category: "NICHE EDUCATION",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/92fe5398-8942-4fd8-c3a7-5038dcc96400/public",
            quoteSnippet: '"I\'ve been working with MH for almost two years now, and it has been a happy experience."',
            fullQuote: '"I\'ve been working with MH for almost two years now, and it has been a happy experience. I have signed 10 new students, who meet me weekly to learn Japanese. I enjoy my website and am very excited to see my new one next year."',
            annualCost: "$239.88",
            monthlyCost: "$19.99/mo",
            revenue: "$33,800",
            roi: "13,992%",
            scheduledRebuild: "May 2026"
        },
        {
            id: "aimhigh",
            name: "Aim High Hair Studio",
            category: "LOCAL LIFESTYLE",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/2ae2f759-535f-46ae-d94f-11e292761200/public",
            quoteSnippet: '"I can\'t say enough good things about my relationship with MiltonHaines."',
            fullQuote: '"I can\'t say enough good things about my relationship with MiltonHaines. They took a back seat, and let me have the website created exactly as I wanted it. I had to close my business for a few months due to a family emergency, and they immediately offered to pause my payments while I was closed. Who does that? I love my website, and have booked over 50 clients in the last year. It has been a blessing, and has been so helpful to my business."',
            annualCost: "$239.88",
            monthlyCost: "$19.99/mo",
            revenue: "$9,880",
            revenueContext: "(52 clients)",
            roi: "4,019%",
            scheduledRebuild: "June 2026"
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
                                <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-void">
                                    <img
                                        src={client.image}
                                        alt={client.name}
                                        className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                                    />
                                </div>

                                {/* Content Container */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="text-[10px] font-mono text-primary-gold mb-4 uppercase tracking-widest font-bold">
                                        {client.category}
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-white mb-4">
                                        {client.name}
                                    </h3>

                                    <p className="text-gray-300 text-sm italic mb-6">
                                        {client.quoteSnippet}
                                    </p>

                                    <button
                                        onClick={() => toggleExpand(client.id)}
                                        className="text-primary-gold text-sm font-medium self-start hover:text-white transition-colors mb-4 flex items-center"
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

                                    {/* The Numbers Box */}
                                    <div className="relative mt-4">
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
                                    </div>
                                </div>

                                {/* Footer Note */}
                                <div className="bg-void/80 border-t border-white/10 p-4 px-8 mt-auto flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-primary-gold mr-3"></span>
                                    <span className="text-gray-500 text-xs">Full Rebuild Scheduled: <span className="text-white font-bold">{client.scheduledRebuild}</span></span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
