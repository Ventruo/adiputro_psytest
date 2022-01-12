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
                    DEFAULT: '#374151',
                    '50': '#F9FAFB',
                    '100': '#F3F4F6',
                    '200': '#E5E7EB',
                    '300': '#D1D5DB',
                    '400': '#9CA3AF',
                    '500': '#6B7280',
                    '600': '#4B5563',
                    '700': '#374151',
                    '800': '#1F2937',
                    '900': '#111827'
                },
                'secondary': {
                    DEFAULT: '#0EA5E9',
                    '50': '#F5FBFE',
                    '100': '#DBF2FD',
                    '200': '#A6E0FA',
                    '300': '#71CDF6',
                    '400': '#3CBAF3',
                    '500': '#0EA5E9',
                    '600': '#0B83B9',
                    '700': '#086189',
                    '800': '#053F59',
                    '900': '#021D29'
                },
                bgdark2: "#202c34",
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
    theme: {
      extend: {
          colors: {
              'primary': {
                  DEFAULT: '#374151',
                  '50': '#F9FAFB',
                  '100': '#F3F4F6',
                  '200': '#E5E7EB',
                  '300': '#D1D5DB',
                  '400': '#9CA3AF',
                  '500': '#6B7280',
                  '600': '#4B5563',
                  '700': '#374151',
                  '800': '#1F2937',
                  '900': '#111827'
              },
              'secondary': {
                  DEFAULT: '#0EA5E9',
                  '50': '#F5FBFE',
                  '100': '#DBF2FD',
                  '200': '#A6E0FA',
                  '300': '#71CDF6',
                  '400': '#3CBAF3',
                  '500': '#0EA5E9',
                  '600': '#0B83B9',
                  '700': '#086189',
                  '800': '#053F59',
                  '900': '#021D29'
              },
              bgdark2: "#202c34",
          },
      },
  },
  plugins: [],
}
