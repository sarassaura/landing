import {
  Container,
  colors,
  NextPage,
  useMediaQuery,
  Heading,
  Text,
  Flex,
  Button,
  Stack,
} from 'ui'
import { useRouter } from 'next/router'

import Link from 'next/link'
import { useState } from 'react'

const Services = () => {
  const router = useRouter()
  const [isNotMobile] = useMediaQuery('(min-width: 48em)')
  const [service, setService] = useState('ux')
  const changePage = (up: number) => {
    if (isNotMobile && up) {
      if (up > 0) {
        router.push('/#Home', undefined, { scroll: false })
      }
      if (up < 0) {
        router.push('/#Technologies', undefined, { scroll: false })
      }
    }
  }

  return (
    <Container
      id="Services"
      direction="column"
      bgGradient={`linear(to-l,${colors.purple.lightBackground}, ${colors.purple.darkBackground})`}
      changePage={changePage}
      paddingTop={66}
    >
      <Heading
        variant="title"
        marginBottom={['112px', '112px', '64px']}
        marginTop={['100px', '100px', '0px']}
        marginX="45px"
        width={['280px', '280px', '600px']}
        textAlign="center"
        fontSize={['40px', '40px', '50px']}
        lineHeight={['48px', '48px', '51px']}
      >
        We help clients with
      </Heading>
      <Flex direction={['column', 'column', 'row']}>
        <Stack
          direction="column"
          spacing="28px"
          display={['none', 'none', 'none', 'none', 'flex']}
          marginRight="48px"
        >
          <Button
            variant="about"
            onClick={() => {
              setService('ux')
            }}
          >
            UI/UX Design
          </Button>
          <Button
            variant="about"
            onClick={() => {
              setService('dev')
            }}
          >
            Development
          </Button>
          <Button
            variant="about"
            onClick={() => {
              setService('maintain')
            }}
          >
            Mainantance
          </Button>
        </Stack>
        <Flex direction="column" justify="center">
          <Heading
            variant="services"
            marginBottom={['36px', '36px', '28px']}
            textAlign={['center', 'center', 'start']}
            fontSize={['30px', '30px', '40px']}
            lineHeight={['36px', '36px', '48px']}
            fontWeight={[600, 600, 800]}
            display={service !== 'ux' ? ['unset', 'unset', 'none'] : 'unset'}
          >
            UI/UX Design
          </Heading>
          <Text
            variant="paragraph"
            width={['340px', '340px', '650px']}
            display={service !== 'ux' ? ['unset', 'unset', 'none'] : 'unset'}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            ullamcorper enim ut auctor dictum. Ut a bibendum turpis, ac interdum
            neque. Phasellus molestie leo eget congue pretium. Sed luctus risus
            in odio feugiat imperdiet. Phasellus commodo metus quis neque
            vestibulum, in posuere nisi aliquam. Mauris lectus risus, porta non
            tellus vitae, dapibus euismod orci. Morbi lacinia mattis justo,
            facilisis auctor diam lacinia et. Donec feugiat metus at{' '}
          </Text>
        </Flex>
        <Flex direction="column" justify="center">
          <Heading
            variant="services"
            marginBottom={['36px', '36px', '28px']}
            marginTop={['105px', '105px', 'auto']}
            display={service !== 'dev' ? ['unset', 'unset', 'none'] : 'unset'}
            textAlign={['center', 'center', 'start']}
            fontSize={['30px', '30px', '40px']}
            lineHeight={['36px', '36px', '48px']}
            fontWeight={[600, 600, 800]}
          >
            Development
          </Heading>
          <Text
            variant="paragraph"
            width={['340px', '340px', '650px']}
            display={service !== 'dev' ? ['unset', 'unset', 'none'] : 'unset'}
            marginBottom="auto"
          >
            Morbi maximus, purus in aliquet molestie, nisl nisl aliquet sem, ut
            imperdiet est massa nec sem. Fusce vestibulum dui ac fringilla
            varius. In vestibulum lorem et lectus sollicitudin tincidunt. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Cras non dui eget odio suscipit consectetur suscipit
            hendrerit orci. Quisque fringilla massa et tortor sagittis tempor
            vitae eget urna. Suspendisse id ligula eu lectus
          </Text>
        </Flex>
        <Flex direction="column" justify="center">
          <Heading
            variant="services"
            marginBottom={['36px', '36px', '28px']}
            marginTop={['105px', '105px', 'auto']}
            display={
              service !== 'maintain' ? ['unset', 'unset', 'none'] : 'unset'
            }
            textAlign={['center', 'center', 'start']}
            fontSize={['30px', '30px', '40px']}
            lineHeight={['36px', '36px', '48px']}
            fontWeight={[600, 600, 800]}
          >
            Maintenance
          </Heading>
          <Text
            variant="paragraph"
            width={['340px', '340px', '650px']}
            marginBottom={['150px', '150px', 'auto']}
            display={
              service !== 'maintain' ? ['unset', 'unset', 'none'] : 'unset'
            }
          >
            In ultricies tempus nunc, in condimentum mi placerat sit amet.
            Aliquam rutrum velit id tortor egestas laoreet. Nullam molestie
            nulla nec tempus vehicula. Vivamus et ligula sit amet mi commodo
            efficitur. Suspendisse potenti. Etiam turpis neque, aliquam nec erat
            ac, hendrerit rhoncus tortor.
          </Text>
        </Flex>
      </Flex>
      <Link href="#Technologies" scroll={false} title="Technologies">
        <NextPage />
      </Link>
    </Container>
  )
}

export default Services
