module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                lato: ['lato'],
                raleway: ['raleway'],
                manrope: ['manrope'],
            },
            backgroundImage: (theme) => ({
                'back-ground': "url('/ww.png')",
                'footer-texture': "url('/img/footer-texture.png')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
