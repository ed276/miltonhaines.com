
import React from 'react';

const Portfolio = () => {
    const clients = [
        { name: "Aim High", image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/2ae2f759-535f-46ae-d94f-11e292761200/public" },
        { name: "Danubia", image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/a51ecdc5-dc37-480e-5e4e-41e33fc04600/public" },
        { name: "Loftus Elite Roofing", image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/7e119676-cb9f-42d9-b6c3-5be8fec4ca00/public" },
        { name: "Noriko's Nook", image: "https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/92fe5398-8942-4fd8-c3a7-5038dcc96400/public" }
    ];

    return (
        <section className="py-24 bg-void border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-2">Recent Deployments</h2>
                        <p className="text-gray-500 text-sm">Active infrastructure in the wild.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {clients.map((client, index) => (
                        <div key={index} className="group relative">
                            <div className="aspect-w-16 aspect-h-9 rounded-sm overflow-hidden border border-white/10 group-hover:border-primary-gold/50 transition-colors duration-300">
                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-void/50 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>
                            <h3 className="mt-4 text-white font-heading font-medium text-sm group-hover:text-primary-gold transition-colors">{client.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
