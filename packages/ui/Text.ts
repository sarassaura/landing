import { defineStyleConfig } from '@chakra-ui/react'

export const Text = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    fontWeight: 300,
    color: '#FFFFFF',
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    subtitle: {
      fontSize: '12px',
      lineHeight: '15px',
    },
    paragraph: {
      fontSize: '18px',
      lineHeight: '22px',
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
})
