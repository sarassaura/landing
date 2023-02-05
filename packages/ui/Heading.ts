import { defineStyleConfig } from '@chakra-ui/react'

export const Heading = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    color: '#FFFFFF',
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    title: {
      fontWeight: 800,
    },
    'other-title': {
      fontSize: '40px',
      lineHeight: '48px',
      fontWeight: 800,
    },
    services: {
      fontSize: '30px',
      lineHeight: '36px',
      fontWeight: 600,
      md: {
        fontSize: '40px',
        lineHeight: '48px',
        fontWeight: 800,
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
})
