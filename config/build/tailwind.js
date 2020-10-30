const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.svelte',
  ],
  corePlugins: [
    'preflight',
    'alignItems',
    'backgroundColor',
    'backgroundOpacity',
		'display',
    'flex',
    'flexDirection',
    'gridTemplateColumns',
    'gridTemplateRows',
    'inset',
    'justifyContent',
    'height',
    'margin',
		'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'order',
    'overflow',
    'padding',
    'position',
    'textColor',
    'width',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
        secondary: colors.blue,
      },
      sidebar: {
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
};
