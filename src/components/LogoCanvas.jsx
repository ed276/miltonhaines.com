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
            const loadedImages = [];
            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                const filename = `ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
                img.src = `/logo-sequence/${filename}`;
                await new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve; // Continue even if frame missing
                });
                loadedImages.push(img);
            }
            setImages(loadedImages);
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
                end: "+=200", // The "runway" we discussed
                scrub: 0.5, // Smooth scrubbing
            },
            onUpdate: () => render(Math.round(scrollObj.frame))
        });

    }, [isLoaded, images]);

    if (!isLoaded) return <div className="h-10 w-10 bg-transparent" />; // Placeholder

    return (
        <canvas
            ref={canvasRef}
            className="h-10 w-auto object-contain"
        />
    );
};

export default LogoCanvas;
