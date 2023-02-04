import { defineStyleConfig } from '@chakra-ui/react'

export const Button = defineStyleConfig({
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    service: {
      border: '1px solid',
      borderColor: '#B181FF',
      backgroundColor: '#7853B6',
      borderRadius: '5px',
      width: '165px',
      height: '42px',
      fontSize: '12px',
      fontWeight: '400',
      color: '#FFFFFF',
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
})
