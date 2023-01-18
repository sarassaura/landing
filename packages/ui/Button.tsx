import { Button as ChakraButton } from '@chakra-ui/react'

export const Button = () => (
  <ChakraButton colorScheme="teal" size="lg" variant="solid">
    Boop
  </ChakraButton>
)

export const AnotherButton = () => <button type="button">Boop</button>
