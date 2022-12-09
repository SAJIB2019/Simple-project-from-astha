/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{svelte,html,js,ts}'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                lora: "'Lora',serif",
                dm: "'DM Mono',monospace"
            }
        }
    },
    plugins: []
};