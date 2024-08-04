/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        colors: {
            "ring-blue": "#2563EB",
            "ring-red": "#DC2626",
            "ring-green": "#10B981",
            "ring-yellow": "#F59E0B",
            "ring-pink": "#EC4899",
        },
        extend: {
            backgroundColor: {
                white: "#ffffff",
            },
            backgroundImage: {
                "gold-indicator": "linear-gradient(to top, #fdf6d7, #fae868)",
                "silver-indicator": "linear-gradient(to top, #f3f4f6, #d3d4d8)",
                "bronze-indicator": "linear-gradient(to top, #f9d6ac, #f2b17b)",
                primary:
                    "linear-gradient(90deg, rgb(51, 19, 98) 0%, rgb(125, 132, 194) 100%);",
            },
            fontFamily: {
                satoshi: ["Satoshi", "sans-serif"],
            },
        },
    },
};
