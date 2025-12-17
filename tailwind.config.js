/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0f172a',
                    light: '#1e293b',
                },
                secondary: '#64748b',
                accent: {
                    DEFAULT: '#f97316',
                    hover: '#ea580c',
                },
                bg: {
                    dark: '#020617',
                    light: '#ffffff',
                },
                text: {
                    light: '#f8fafc',
                    dark: '#334155',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
