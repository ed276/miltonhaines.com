import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LogoCanvas = () => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const frameCount = 60; // Actual frame count

    // 1. Preload Images
    useEffect(() => {
        const loadImages = async () => {
            const promises = [];
            for (let i = 1; i <= frameCount; i++) {
                // Files are now PNGs according to list_dir
                const filename = `ezgif-frame-${i.toString().padStart(3, '0')}.png`;
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
            // User requested "End with logo facing straight forward".
            // Assuming the sequence 001->060 ends in that state.
            // Removing reverse() to play natural sequence.
            setImages(loaded.filter(Boolean));

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
                end: "+=400", // Matches Header opacity logic (increased to 400)
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
        // Removed contrast filter as user provided new assets and requested mix-blend-mode: screen
        // The mix-blend-mode is handled by the parent container in Header.jsx
        />
    );
};

export default LogoCanvas;
