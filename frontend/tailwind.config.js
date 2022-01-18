const colors = require('tailwindcss/colors');
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': {
                    DEFAULT: '#CAF0F8',
                    '100': '#ADE8F4',
                    '200': '#90E0EF',
                    '300': '#48CAE4',
                    '400': '#00B4D8',
                    '500': '#0096C7',
                    '600': '#0077B6',
                    '700': '#023E8A',
                    '800': '#032174',
                    '900': '#03045E',
                    '1000': '#030343'
                }
            },
            inset: {
                '-4' : '-1rem',
            },
            transitionDuration: {
                '2000' : '2000ms'
            },
            height: {
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
                '144' : '36rem'
            }
        },
    },
    plugins: [],
}
