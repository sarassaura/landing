import { Stack } from '@chakra-ui/react'

interface MenuProps {
  children: React.ReactNode
}

export const Menu: React.FC<MenuProps> = ({ children }) => (
  <Stack
    direction="row"
    spacing="20px"
    justify="flex-end"
    width="100%"
    marginRight="127px"
  >
    {children}
  </Stack>
)
