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
    contact: {
      width: '100%',
      height: '62px',
      border: '1px solid #B181FF',
      fontWeight: 600,
      fontSize: '15px',
      lineHeight: '18px',
      color: '#B181FF',
      borderRadius: 'none',
      _hover: {
        color: '#FFFFFF',
        backgroundColor: '#B181FF',
      },
    },
    send: {
      width: '100%',
      height: '51px',
      backgroundColor: '#B181FF',
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '22px',
      color: '#FFFFFF',
      borderRadius: 'none',
      _hover: {
        color: '#B181FF',
        backgroundColor: '#FFFFFF',
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
})
