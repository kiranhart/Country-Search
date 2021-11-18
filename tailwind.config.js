module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                nunito: ['"Nunito Sans"', 'sans-serif'],
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
