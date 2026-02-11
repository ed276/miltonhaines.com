
import React, { useState } from 'react';

const Card = ({ title, description, image, isHighlighted, isSecurity, subtitle }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Split description for teaser vs full content
    // We'll use the first sentence as the teaser if not expanded
    const firstSentenceEnd = description.indexOf('.');
    const teaser = firstSentenceEnd !== -1 ? description.substring(0, firstSentenceEnd + 1) : description;

    return (
        <div
            className={`
            relative rounded-sm overflow-hidden group transition-all duration-500
            ${isHighlighted ? 'border-primary-gold' : 'border-white/10 hover:border-primary-gold/50'}
            bg-milton-black border flex flex-col
            ${isExpanded ? 'active-card z-40 scale-105 shadow-[0_0_50px_rgba(0,0,0,0.8)]' : 'hover:-translate-y-1 h-full'}
        `}
        >
            {/* Image Container */}
            <div className={`relative w-full overflow-hidden transition-all duration-700 ${isExpanded ? 'h-32' : 'h-48'}`}>
                {/* 1. Gentle Tint */}
                <div className="absolute inset-0 bg-void/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* 2. The Main Fade-to-Black Gradient - Matching Hero Style */}
                <div className="absolute inset-0 bg-gradient-to-t from-milton-black via-milton-black/80 to-transparent z-20"></div>

                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-cover transform transition-transform duration-700 ${isExpanded ? 'scale-105' : 'group-hover:scale-110'}`}
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

            <div className="p-6 relative z-30 flex-grow flex flex-col -mt-12">
                <h3 className={`text-lg font-heading font-bold mb-2 leading-tight ${isHighlighted ? 'text-primary-gold' : 'text-white'}`}>
                    {title}
                </h3>
                {subtitle && (
                    <p className="text-xs font-mono text-gray-400 mb-3">{subtitle}</p>
                )}

                <div className="relative">
                    <p className={`text-gray-400 text-sm leading-relaxed mb-4 transition-all duration-500 ${isExpanded ? 'opacity-100' : 'line-clamp-3'}`}>
                        {isExpanded ? description : teaser}
                    </p>
                </div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-auto text-primary-gold text-xs font-bold uppercase tracking-wider flex items-center hover:text-white transition-colors focus:outline-none group/btn"
                >
                    {isExpanded ? (
                        <>
                            Learn Less <span className="ml-1 text-lg leading-none">&times;</span>
                        </>
                    ) : (
                        <>
                            Learn More <span className="ml-1 text-lg leading-none group-hover/btn:translate-x-1 transition-transform">+</span>
                        </>
                    )}
                </button>

                {/* Bottom Border/Highlight for Master Component */}
                {isHighlighted && !isExpanded && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                        <span className="text-[10px] font-mono text-primary-gold/70 uppercase tracking-widest">Master Component</span>
                    </div>
                )}
            </div>
        </div>
    );
};

const FeatureMosaic = () => {
    // 1. Custom Website Build
    // 2. SEO Foundation
    // 3. Security & Reliability
    // 4. Launch & Domain Connection
    // 5. Ai Enhanced Structure & Clarity
    // 6. Ongoing Human Support
    // 7. Quarterly Updates
    // 8. Full Redesign Every Two Years

    const features = [
        {
            id: 1,
            title: "Custom Website Build",
            description: "Every site is custom built using modern web standards. No templates, no page builders—just clean, semantic code optimized for performance and search engines. Your site is built to scale with your business, with a codebase that's maintainable and future-proof.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/fa0fd452-1702-4d9e-49a7-79f9a72d7f00/public",
            isHighlighted: true
        },
        {
            id: 2,
            title: "SEO Foundation",
            description: "We implement comprehensive on-page SEO including optimized meta tags, semantic HTML structure, clean URL architecture, proper heading hierarchy, image optimization, and technical SEO best practices. Your site launches with a solid foundation for organic search visibility, giving you a competitive edge in local and industry-specific searches.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/a8cef1f5-fa0f-4a54-75b6-d24196935e00/public"
        },
        {
            id: 3,
            title: "Security & Reliability",
            description: "Your site is shielded by Cloudflare's global edge network. We deploy active firewall rules to neutralize threats, unmetered DDoS protection to absorb traffic spikes, and automated bot mitigation to prevent content scraping. With full SSL encryption and redundant global hosting, your digital asset is defended by the same infrastructure used by major enterprises.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/4cf5fecd-0024-41f6-ccf6-fe5fb796ed00/public",
            isSecurity: true
        },
        {
            id: 4,
            title: "Launch & Domain Connection",
            description: "We manage your entire launch process including domain registration or transfer, DNS configuration, email setup, SSL certificate installation, and final deployment. Whether you have an existing domain or need a new one, we handle all the technical complexity so your site goes live smoothly and professionally.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/3c5e4b2c-8f99-4658-eb01-926936b43800/public"
        },
        {
            id: 5,
            title: "AI Enhanced Structure & Clarity",
            description: "We use advanced AI systems to analyze and optimize your content structure, ensure messaging clarity, improve readability, and organize information architecture. This means your value proposition is communicated clearly, your calls-to-action are strategically placed, and visitors can find what they need effortlessly—resulting in better engagement and conversion rates.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/21c6cf0c-a2b0-49fe-6452-9428b10cd300/public"
        },
        {
            id: 6,
            title: "Ongoing Human Support",
            description: "No chatbots, no ticket systems, no waiting days for responses. You get direct access to the team that built your site. Whether you need content updates, have technical questions, or want to discuss new features, we're here to help—typically responding within hours, not days. We don't disappear after launch.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/2bbba986-0576-4593-f492-83fd93062d00/public"
        },
        {
            id: 7,
            title: "Quarterly Updates",
            description: "Every three months, we review your site's performance, update content as needed, implement security patches, optimize loading speeds, and ensure compatibility with the latest browsers and devices. These proactive updates keep your site fresh, protect against vulnerabilities, and maintain peak performance without you lifting a finger.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/e1b0df87-4e48-4288-3b03-89d4ebd29600/public"
        },
        {
            id: 8,
            title: "Full Redesign Every Two Years",
            description: "Every 24 months, your site receives a comprehensive redesign incorporating the latest design trends, user experience improvements, and technological advancements. This isn't a minor refresh—it's a full rebuild that keeps your brand looking modern and competitive. Your business evolves, and your website evolves with it.",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/e20ac0c3-48e9-4ccb-a6f3-98dce0777200/public"
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    {features.map((feature) => (
                        <Card key={feature.id} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureMosaic;
