module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      ssm: '400px',
      sm: '480px',
      md: '640px',
      '2md': '768px',
      lg: '1024px',
      '2lg': '1220px',
      xl: '1366px',
      '2xl': '1620px',
    },
    colors: {
      text: '#343D48',
      textSecondary: '#02073E',
      heading: '#0F2137',
      headingSecondary: '#0F2137',
      'white-fff': '#FFFFFF',
      backgroundSecondary: '#E5ECF4',
      yellow: '#FFA740',
      primary: '#EA3A60',
      secondary: '#2563FF',
      muted: '#E4E4E4',
      'muted-2': '#111',
      accent: '#609',
      dark: '#000',
      'rating-o': '#ddd',
    },
    fontFamily: {
      sans: ['DM Sans, sans-serif'],
    },
    extend: {
      keyframes: {
        positionAnimation: {
          from: {
            position: 'fixed',
            opacity: 1,
          },
          to: {
            position: 'absolute',
            opacity: 1,
            transition: 'all 0.4s ease',
          },
        },
        videoBtnAnimation: {
          from: {
            transform: 'scale(1)',
            opacity: 1,
          },
          to: {
            transform: 'scale(1.5)',
            opacity: 0,
          },
        },
      },
      animation: {
        positionAnimation: 'positionAnimation 0.4s ease',
        videoBtnAnimation: 'videoBtnAnimation 1.5s ease-out infinite',
      },
    },
    boxShadow: {
      btn: '0px 12px 24px -10px rgba(0, 0, 0, 0.3)',
      btnPrimary: 'rgba(233,76,84,0.57) 0px 9px 20px -5px',
      btnPricingActive: '0 3px 4px rgba(38, 78, 118, 0.1)',
      header: '0 1px 2px rgba(0, 0, 0, 0.06)',
      pricingBox: '0px 4px 25px rgba(38, 78, 118, 0.1)',
      memberCard: '0 4px 10px rgba(39, 83, 123, 0.12)',
      reviewCard: '0px 0px 1px rgba(38, 78, 118, 0.35)',
      reviewCardHover: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
