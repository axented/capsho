module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      colors: {
        primaryDark: '#6267DA',
        secondaryDark: '#FBCD85',
        secondaryLight: '#FFF3C8',
        primaryLight: '#EAE8FF',
        backgroundGradient: '#F5F4FF',
        offWhite: '#FCFCFC',
        yellowBackgroundStart: '#FFE7C2',
        yellowBackgroundEnd: '#FFDDA7',
        formLabel: '#A0A3BD'
      },
      fontFamily: {
        heading: ['"Source Serif Pro"'],
        body: ['"Open Sans"'],
        number: ['"Inter"'],
        navbar: ['"DM Sans"'],
        bodyLexend: ['"Lexend Deca"'],
        formText: ['"Poppins"']
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
