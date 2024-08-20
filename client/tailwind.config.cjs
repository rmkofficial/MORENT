module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', 'auto'],  // Auto line-height
        'sm': ['14px', '140%'],  // 140% line-height
        'base': ['16px', '140%'],
        'lg': ['18px', '140%'],
        'xl': ['24px', '120%'],  // 120% line-height
        '2xl': ['36px', '120%'],
        '3xl': ['72px', '110%'], // 110% line-height
        '4xl': ['96px', '110%'],
      },
      fontWeight: {
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
    },
  },
  plugins: [],
}
