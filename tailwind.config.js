/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'void': '#050505',
                'milton-black': '#0a0a0a',
                'primary-gold': '#FFD700',
                'terminal-green': '#94A3B8', // Repurposed from neon green to a sleek industrial slate
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
            },
            backgroundImage: {
                'circuit-board': "url('https://imagedelivery.net/m5BQ9NwISdGmaMKgfNT6sA/e2bd3af3-64b9-4ce9-ebda-4e5f12650b00/public')",
                'infrastructure-grid': "radial-gradient(circle at center, rgba(255, 215, 0, 0.05) 0%, transparent 70%)",
            },
            backdropBlur: {
                'xs': '2px',
            }
        },
    },
    plugins: [],
}
