import { Flex } from '@chakra-ui/react'
import TextLogo from './assets/TextLogo'
import DarkExpress from './assets/DarkExpress'
import Express from './assets/λexpress'

interface SideProps {
  router: string
}

export const SideBar: React.FC<SideProps> = ({ router }) => (
  <Flex
    flexDirection="column"
    position="fixed"
    width="79px"
    height="100vh"
    align="center"
    justify="center"
    borderRight={
      router === '/#Contact'
        ? '1px solid rgba(83, 83, 83, 0.19)'
        : '1px solid rgba(255, 255, 255, 0.19)'
    }
    display={['none', 'none', 'flex']}
  >
    {router === '/#Contact' ? (
      <DarkExpress h={141} width="28px" marginBottom={15} />
    ) : (
      <Express h={141} width="28px" marginBottom={15} />
    )}
    <TextLogo width="30px" h={17} paddingRight="5px" />
  </Flex>
)
