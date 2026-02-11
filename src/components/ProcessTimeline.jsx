
import React from 'react';

const ProcessTimeline = () => {
    const steps = [
        {
            title: "The Blueprint",
            step: "01",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/9fa6a373-e4ff-43be-282f-d1ecf2881300/public"
        },
        {
            title: "The Wiring",
            step: "02",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/29416b42-3864-4a7d-6cf2-6dec578d4400/public"
        },
        {
            title: "The Build",
            step: "03",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/cbdbe925-bc90-4207-f259-1e2ff34d9500/public"
        },
        {
            title: "The Power-Up",
            step: "04",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/c6802be5-524e-49e5-1604-01a96d62d800/public"
        },
        {
            title: "The Maintenance Crew",
            step: "05",
            image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/9ad3859b-e39a-448c-9c59-7b199022a300/public"
        }
    ];

    return (
        <section id="process" className="py-24 bg-milton-black relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Our Process</h2>
                    <p className="text-gray-400">Systematic execution. Predictable results.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary-gold/50 to-transparent"></div>

                    <div className="space-y-24">
                        {steps.map((item, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>

                                {/* Image Side */}
                                <div className="w-full md:w-1/2 px-8">
                                    <div className="relative group perspective-1000">
                                        <div className={`absolute -inset-2 bg-gradient-to-r ${index % 2 === 0 ? 'from-primary-gold/20 to-transparent' : 'from-transparent to-primary-gold/20'} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                        <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-2 group-hover:scale-105">
                                            <div className="absolute inset-0 bg-void/10 z-10"></div>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-1/2 px-8 mt-8 md:mt-0 text-center md:text-left">
                                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                                        <span className="text-6xl font-black text-white/5 font-heading absolute -mt-12 select-none pointer-events-none">
                                            {item.step}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 relative z-10">
                                            {item.title}
                                        </h3>
                                        <div className={`h-1 w-20 bg-primary-gold mb-6 ${index % 2 === 0 ? '' : 'md:self-end'}`}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
