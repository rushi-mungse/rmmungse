/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1a253f",
                dark: "#151a33",
                secondary: "#2b55cc",
                info: "#4d79f6",
                ternary: "#848db3",
                pure: "#eff2f9",
                fade: "#7081b9",
                mild: "#8997bd",
                footer: "#212a4a",
                black: "#060b1b",
                twitter: "#4ac7ec",
                dribbble: "#ff5da0",
                success: "#1ecab8",
                danger: "#f1646c",
                dark_blue: "#28365f",
                dark_gray: "#171f33",
                yellow: "#f3c74d",
            },
        },
    },
    plugins: [],
};
