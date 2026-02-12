import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LogoCanvas = () => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const frameCount = 60; // Actual frame count from upload

    // 1. Preload Images
    useEffect(() => {
        const loadImages = async () => {
            const promises = [];
            for (let i = 1; i <= frameCount; i++) {
                const filename = `ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
                // Use BASE_URL to handle GitHub Pages subdirectory
                const src = `${import.meta.env.BASE_URL}logo-sequence/${filename}`;

                promises.push(new Promise((resolve) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => resolve(img);
                    img.onerror = () => resolve(null); // Handle errors gracefully
                }));
            }

            const loaded = await Promise.all(promises);
            // Reverse again as per user feedback ("It ends how we would like it to start")
            // So we want the Tilted frames (which are at the start of the sequence) to be at the END of our scroll?
            // Wait, if the sequence is 1=Tilted, 60=Flat.
            // And we want Start=Tilted, End=Flat.
            // Then we keep 1->60. (NO REVERSE)

            // BUT, in previous turn I removed reverse and user said "It ends how we would like it to start".
            // Implementation without reverse ended with Flat.
            // User wants Start to be Flat? 
            // "That [tilted] is still our starting position... it ends [flat] how we would like it to start".
            // So User wants Start=Flat.
            // So we need to reverse it so Frame 60 (Flat) becomes the first frame.
            setImages(loaded.filter(Boolean).reverse());

            setIsLoaded(true);
        };

        loadImages();
    }, []);

    // 2. Setup ScrollTrigger Animation
    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Initial Draw
        canvas.width = images[0].width;
        canvas.height = images[0].height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(images[0], 0, 0);

        const render = (frameIndex) => {
            if (images[frameIndex]) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(images[frameIndex], 0, 0);
            }
        };

        const scrollObj = { frame: 0 };

        gsap.to(scrollObj, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            scrollTrigger: {
                trigger: "body", // Scroll relative to entire page
                start: "top top",
                end: "+=300", // Matches Header opacity logic
                scrub: 0.5, // Smooth scrubbing
            },
            onUpdate: () => render(Math.round(scrollObj.frame))
        });

    }, [isLoaded, images]);

    if (!isLoaded) return <div className="h-full w-full bg-transparent" />; // Placeholder

    return (
        <canvas
            ref={canvasRef}
            className="h-full w-auto object-contain"
            style={{ filter: 'contrast(1.25) brightness(0.75)' }} // Crush dark gray background to black for screen blend
        />
    );
};

export default LogoCanvas;
