/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './layouts/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'main-color': '#58aa47',
            },
        },
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
};
