/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './layouts/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem'
        },
        extend: {
            colors: {
                'main-color': '#58aa47'
            }
        }
    },
    plugins: [require('@tailwindcss/aspect-ratio')]
};
