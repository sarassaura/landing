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
    about: {
      backgroundColor: '#4C2878',
      width: '273px',
      height: '73px',
      color: '#FFFFFF',
      fontSize: '20px',
      lineHeight: '24px',
      fontWeight: 600,
      borderRadius: 'none',
      _hover: {
        backgroundColor: '#FFFFFF',
        color: '#4C2878',
      },
      _focus: {
        backgroundColor: '#FFFFFF',
        color: '#4C2878',
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
})
