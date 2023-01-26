import { Text } from '@chakra-ui/react'
import { colors } from './styles/theme'

interface MenuItemProps {
  children: React.ReactNode
  router: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ router, children }) => (
  <Text
    margin="20px 10px"
    color={router === '/#Contact' ? colors.black.menu : colors.white.text}
  >
    {children}
  </Text>
)
