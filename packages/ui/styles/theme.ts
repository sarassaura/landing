import { extendTheme } from '@chakra-ui/react'

export const fonts = {
  heading: `Inter, sans-serif`,
  body: `Inter, sans-serif`,
}

export const colors = {
  black: {
    lightBackground: '#1B1C20',
    darkBackground: '#1F2226',
    text: '#696969',
    brand: '#878787',
    menu: '#838383',
    linebreak: 'rgba(83, 83, 83, 0.19)',
  },
  white: {
    text: '#FFFFFF',
    brand: '#E9E9E9',
    icons: '#949494',
    linebreak: 'rgba(255, 255, 255, 0.19)',
    background: '#F0EEF4',
  },
  purple: {
    lightBackground: '#5A2D94',
    darkBackground: '#36204B',
    callToActionButton: '#7853B6',
    serviceButtons: '#4C2878',
    contactButtons: '#B181FF',
  },
  red: {
    lightBackground: '#DA4167',
    mobileLightBackground: '#A3304C',
    darkBackground: '#762136',
    buttons: 'rgba(158, 77, 70, 0.1)',
  },
}

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
  '9xl': '8rem',
}

export const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

export const lineHeights = {
  normal: 'normal',
  none: 1,
  shorter: 1.25,
  short: 1.375,
  base: 1.5,
  tall: 1.625,
  taller: '2',
  '3': '.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
}

export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
}

export const config = {
  initialColorMode: 'dark',
}

export const theme = extendTheme({
  fonts,
  colors,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  config,
})
