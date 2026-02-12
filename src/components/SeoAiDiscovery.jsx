
import React, { useEffect, useRef } from 'react';

const SeoAiDiscovery = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const binary = "10";
        const fontSize = 14;
        const columns = Math.ceil(canvas.width / fontSize);
        const drops = Array(columns).fill(1).map(() => Math.random() * -100); // Random start positions

        const draw = () => {
            ctx.fillStyle = 'rgba(5, 5, 5, 0.1)'; // Fade effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0'; // Green text
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = binary.charAt(Math.floor(Math.random() * binary.length));
                // Gradient opacity based on position? Or just low opacity
                ctx.fillStyle = `rgba(0, 255, 65, ${Math.random() * 0.5})`;

                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section id="seo-ai" className="relative py-32 bg-void overflow-hidden">
            {/* Matrix Background */}
            <canvas ref={canvasRef} className="absolute inset-0 opacity-20 pointer-events-none"></canvas>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block border border-terminal-green/30 px-3 py-1 rounded-full bg-terminal-green/5 mb-6">
                            <span className="text-terminal-green font-mono text-xs tracking-widest uppercase">
                                &lt;System_Optimization_Layer&gt;
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
                            AI Discovery: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-terminal-green to-emerald-600 animate-gradient">
                                Built for Tomorrow's Search.
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Traditional SEO is about keywords. AI Discovery is about entities. We structure your data so Large Language Models (LLMs) can read, understand, and recommend you.
                        </p>

                        <ul className="space-y-4 font-mono text-sm text-gray-300">
                            <li className="flex items-center space-x-3">
                                <span className="text-terminal-green">01</span>
                                <span>Structured Data Injection</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-terminal-green">02</span>
                                <span>Semantic HTML5 Backbone</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-terminal-green">03</span>
                                <span>Automated Schema Generation</span>
                            </li>
                        </ul>
                    </div>

                    <div className="relative">
                        {/* Decorative Code Block */}
                        <div className="bg-black/50 backdrop-blur-md border border-white/10 p-6 rounded-sm font-mono text-xs text-gray-400 shadow-2xl">
                            <div className="flex space-x-2 mb-4 border-b border-white/10 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="space-y-2">
                                <p><span className="text-purple-400">const</span> <span className="text-blue-400">optimizeTraffic</span> = <span className="text-yellow-300">async</span> () ={">"} {'{'}</p>
                                <p className="pl-4"><span className="text-purple-400">await</span> <span className="text-blue-400">injectSchema</span>({'{'}</p>
                                <p className="pl-8"><span className="text-white">"@context"</span>: <span className="text-green-400">"https://schema.org"</span>,</p>
                                <p className="pl-8"><span className="text-white">"@type"</span>: <span className="text-green-400">"LocalBusiness"</span>,</p>
                                <p className="pl-8"><span className="text-white">"name"</span>: <span className="text-green-400">"MiltonHaines WebCraft"</span></p>
                                <p className="pl-4">{'}'});</p>
                                <p className="pl-4"><span className="text-gray-500">// Executing SEO protocols...</span></p>
                                <p className="pl-4"><span className="text-terminal-green">return</span> <span className="text-white">true</span>;</p>
                                <p>{'}'}</p>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-terminal-green text-black font-bold px-4 py-2 rounded-sm shadow-lg transform rotate-3">
                            AI-Ready
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeoAiDiscovery;
