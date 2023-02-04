import { Flex } from '@chakra-ui/react'
import SmallLogo from './assets/SmallLogo'
import { Menu } from './Menu'

interface NavigationProps {
  children: React.ReactNode
  router: string
}

export const NavigationBar: React.FC<NavigationProps> = ({
  children,
  router,
}) => (
  <Flex
    flexDirection="row"
    position="fixed"
    w="100%"
    h="66px"
    align="center"
    borderBottom={
      router === '/#Contact'
        ? '1px solid rgba(83, 83, 83, 0.19)'
        : '1px solid rgba(255, 255, 255, 0.19)'
    }
    display={['none', 'none', 'flex']}
    zIndex={9999}
  >
    <SmallLogo w={22} h={27} margin="0px 30px 0px 27px" />
    <Menu>{children}</Menu>
  </Flex>
)
