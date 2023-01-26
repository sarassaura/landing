import { Flex } from '@chakra-ui/react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Flex w="100%" h="100%" minH="100vh" direction="column">
    {children}
  </Flex>
)
