
import React from 'react';

const Card = ({ title, description, image, isHighlighted, isSecurity, subtitle }) => {
    return (
        <div
            className={`
            relative rounded-sm overflow-hidden group transition-all duration-500 hover:-translate-y-1
            ${isHighlighted ? 'border-primary-gold' : 'border-white/10 hover:border-primary-gold/50'}
            bg-milton-black border h-full flex flex-col
        `}
        >
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-void/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Text Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-milton-black via-milton-black/50 to-transparent z-20"></div>

                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {isSecurity && (
                    <div className="absolute top-2 right-2 z-30">
                        <div className="flex items-center space-x-1 text-terminal-green text-[10px] font-mono border border-terminal-green/30 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-sm">
                            <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-terminal-green"></span>
                            <span>ACTIVE FIREWALL</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-8 relative z-30 flex-grow flex flex-col -mt-12">
                <h3 className={`text-xl font-heading font-bold mb-2 ${isHighlighted ? 'text-primary-gold' : 'text-white'}`}>
                    {title}
                </h3>
                {subtitle && (
                    <p className="text-xs font-mono text-gray-400 mb-4">{subtitle}</p>
                )}

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                {/* Bottom Border/Highlight */}
                {isHighlighted && (
                    <div className="mt-auto pt-4 border-t border-white/10">
                        <span className="text-xs font-mono text-primary-gold uppercase tracking-wider">Master Component</span>
                    </div>
                )}
            </div>
        </div>
    );
};

const FeatureMosaic = () => {
    const features = [
        {
            title: "Custom Website Build",
            subtitle: "Built by experienced developers.",
            description: "Every site is custom built using modern web standards. No templates, no drag-and-drop bloat.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/fa0fd452-1702-4d9e-49a7-79f9a72d7f00/public",
            isHighlighted: true,
            id: 1
        },
        {
            title: "SEO Foundation",
            description: "Semantic HTML5, schema markup, and meta tag optimization baking discoverability into the code.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/a8cef1f5-fa0f-4a54-75b6-d24196935e00/public",
            id: 2
        },
        {
            title: "AI-Enhanced Structure",
            description: "Leveraging AI for clear, simplified content structure and optimized user flow architecture.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/21c6cf0c-a2b0-49fe-6452-9428b10cd300/public",
            id: 3
        },
        {
            title: "Quarterly Updates",
            description: "Regular updates to keep your content fresh and your technology secure.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/e1b0df87-4e48-4288-3b03-89d4ebd29600/public",
            id: 4
        },
        {
            title: "Security & Reliability",
            description: "Your site is shielded by Cloudflare’s global edge network. We deploy active firewall rules to neutralize threats, unmetered DDoS protection, and automated bot mitigation.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/4cf5fecd-0024-41f6-ccf6-fe5fb796ed00/public",
            isSecurity: true,
            id: 5
        },
        {
            title: "Full Redesign",
            description: "A complete visual and functional redesign every two years to ensure you stay ahead of the curve.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/e20ac0c3-48e9-4ccb-a6f3-98dce0777200/public",
            id: 6
        },
        {
            title: "Launch & Domain",
            description: "Seamless domain connection, SSL certification setup, and zero-downtime launch coordination.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/3c5e4b2c-8f99-4658-eb01-926936b43800/public",
            id: 7
        },
        {
            title: "Ongoing Human Support",
            subtitle: "Real people, real responses.",
            description: "No chatbots, no ticket systems. Direct access to the team that built your site. Typically responding within hours, not days.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/2bbba986-0576-4593-f492-83fd93062d00/public",
            id: 8
        }
    ];

    return (
        <section id="whats-included" className="py-32 bg-void relative">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">What's Included</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We engineered a better solution. No bloat. Just performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <Card key={feature.id} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureMosaic;
