
import React from 'react';

const Card = ({ title, description, icon, isHighlighted, isSecurity, colSpan = 1, rowSpan = 1 }) => {
    return (
        <div
            className={`
            relative p-8 rounded-sm overflow-hidden group transition-all duration-500 hover:-translate-y-1
            ${isHighlighted ? 'bg-gradient-to-br from-gray-900 to-black border border-primary-gold' : 'bg-void border border-white/10 hover:border-primary-gold/50'}
            ${colSpan === 2 ? 'md:col-span-2' : ''}
            ${rowSpan === 2 ? 'md:row-span-2' : ''}
            backdrop-blur-sm
        `}
        >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-gold to-terminal-green opacity-0 group-hover:opacity-10 blur transition-opacity duration-500"></div>
            <div className="absolute inset-[1px] bg-void rounded-sm z-0"></div>

            <div className="relative z-10 h-full flex flex-col">
                {isSecurity && (
                    <div className="absolute top-0 right-0 p-2">
                        <div className="flex items-center space-x-1 text-terminal-green text-[10px] font-mono border border-terminal-green/30 px-2 py-0.5 rounded-full bg-terminal-green/5">
                            <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-terminal-green"></span>
                            <span>ACTIVE FIREWALL</span>
                        </div>
                    </div>
                )}

                <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    {icon}
                </div>

                <h3 className={`text-xl font-heading font-bold mb-3 ${isHighlighted ? 'text-primary-gold' : 'text-white'}`}>
                    {title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                {isHighlighted && (
                    <div className="mt-auto pt-4 border-t border-white/10">
                        <span className="text-xs font-mono text-primary-gold uppercase tracking-wider">Master Component</span>
                    </div>
                )}
                {isSecurity && (
                    <div className="mt-auto pt-4 border-t border-white/10">
                        <span className="text-xs font-mono text-terminal-green uppercase tracking-wider">Bot Mitigation: Enabled</span>
                    </div>
                )}
            </div>
        </div>
    );
};

const FeatureMosaic = () => {
    const features = [
        {
            title: "Custom Infrastructure",
            description: "Hand-crafted, production-grade architecture built from the ground up. No templates, no drag-and-drop bloat.",
            icon: <svg className="w-8 h-8 text-primary-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
            isHighlighted: true,
            colSpan: 1,
            id: 1
        },
        {
            title: "Speed Optimization",
            description: "Core Web Vitals focused development ensuring <1s load times via static generation and asset compression.",
            icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
            id: 2
        },
        {
            title: "Mobile First",
            description: "Responsive design patterns that prioritize the mobile experience without compromising desktop functionality.",
            icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
            id: 3
        },
        {
            title: "SEO Foundation",
            description: "Semantic HTML5, schema markup, and meta tag optimization baking discoverability into the code.",
            icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
            id: 4
        },
        {
            title: "Edge Security",
            description: "Cloudflare integration with active firewall rules, DDoS protection, and automated bot mitigation strategies.",
            icon: <svg className="w-8 h-8 text-terminal-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
            isSecurity: true,
            colSpan: 2,
            id: 5
        },
        {
            title: "Analytics Integration",
            description: "Privacy-focused analytics setup to track conversion goals and user behavior patterns.",
            icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" /></svg>,
            id: 6
        },
        {
            title: "Content Strategy",
            description: "Structured content modeling ensuring your message is clear, compelling, and consistent.",
            icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
            id: 7
        },
        {
            title: "CMS Training",
            description: "Comprehensive handover documentation and training sessions empowering your team.",
            icon: <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
            id: 8
        }
    ];

    return (
        <section id="features" className="py-32 bg-void relative">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">What's Included</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We engineered a better solution. No bloat. Just performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Card key={feature.id} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureMosaic;
