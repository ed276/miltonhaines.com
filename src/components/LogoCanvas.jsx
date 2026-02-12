import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LogoCanvas = () => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const frameCount = 60; // Actual frame count

    // 1. Preload & Process Images (Chroma Key: Black -> Transparent)
    useEffect(() => {
        const loadAndProcessImages = async () => {
            const loadPromises = [];

            // Helper to process image data: Turn black pixels transparent
            const removeBlackBackground = async (img) => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                const threshold = 40; // Pixel darkness threshold (0-255)

                for (let i = 0; i < data.length; i += 4) {
                    const r = data[i];
                    const g = data[i + 1];
                    const b = data[i + 2];

                    // If pixel is dark enough, make it transparent
                    if (r < threshold && g < threshold && b < threshold) {
                        data[i + 3] = 0; // Alpha = 0
                    }
                }

                return await createImageBitmap(imageData);
            };

            for (let i = 1; i <= frameCount; i++) {
                const filename = `ezgif-frame-${i.toString().padStart(3, '0')}.png`;
                const src = `${import.meta.env.BASE_URL}logo-sequence/${filename}`;

                loadPromises.push(new Promise(async (resolve) => {
                    const img = new Image();
                    img.crossOrigin = "Anonymous"; // optimize for canvas
                    img.src = src;
                    img.onload = async () => {
                        try {
                            const processed = await removeBlackBackground(img);
                            resolve(processed);
                        } catch (e) {
                            console.error("Frame processing failed", e);
                            resolve(img); // Fallback to original
                        }
                    };
                    img.onerror = () => resolve(null);
                }));
            }

            const processedFrames = await Promise.all(loadPromises);
            setImages(processedFrames.filter(Boolean));
            setIsLoaded(true);
        };

        loadAndProcessImages();
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
                end: "+=400", // Matches Header opacity logic 
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
        // Clean canvas, no CSS filters needed as transparency is baked in now
        />
    );
};

export default LogoCanvas;
