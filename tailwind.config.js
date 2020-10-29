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
        primary: colors.blue,
        secondary: colors.orange,
      },
      navbar: {
        size: '4rem',
      },
      flex: {
        fill: '1 1 100%',
      },
    },
  },
  variants: {},
  plugins: [],
};
