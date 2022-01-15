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
                    DEFAULT: '#A9D6E5',
                    '100': '#89C2D9',
                    '200': '#61A5C2',
                    '300': '#468FAF',
                    '400': '#2C7DA0',
                    '500': '#2A6F97',
                    '600': '#014F86',
                    '700': '#01497C',
                    '800': '#013A63',
                    '900': '#012A4A'
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
