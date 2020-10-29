const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        secondary: colors.blue,
      },
      navbar: {
        size: '4rem',
      },
      flex: {
        fill: '1 1 100%',
      },
      inset: {
        '100': '100%',
      },
    },
  },
  variants: {},
  plugins: [],
};
