import {
  Container,
  colors,
  NextPage,
  useMediaQuery,
  Text,
  Heading,
  Button,
  Flex,
  SocialMedia,
} from 'ui'
import { useRouter } from 'next/router'
import BigLogo from 'ui/assets/BigLogo'

import Link from 'next/link'

const Home = () => {
  const router = useRouter()
  const [isNotMobile] = useMediaQuery('(min-width: 48em)')
  const changePage = (up: number) => {
    if (isNotMobile && up) {
      if (up > 0) {
        router.push('/#Contact', undefined, { scroll: false })
      }
      if (up < 0) {
        router.push('/#Services', undefined, { scroll: false })
      }
    }
  }

  return (
    <Container
      id="Home"
      direction="row"
      bgGradient={`linear(to-l,${colors.black.lightBackground}, ${colors.black.darkBackground})`}
      changePage={changePage}
      paddingTop={66}
    >
      <Flex
        align="center"
        width="100%"
        justify={['center', 'center', 'center', 'space-between']}
        marginLeft={['none', 'none', 'none', '65px', '139px']}
      >
        <Flex
          direction="column"
          width={['300px', '300px', '567px']}
          align={['center', 'center', 'start']}
        >
          <Heading
            variant="title"
            marginBottom={['29px', '29px', '31px']}
            textAlign={['center', 'center', 'start']}
            fontSize={['40px', '40px', '50px']}
            lineHeight={['48px', '48px', '51px']}
          >
            Transform your vision into a stunning reality!
          </Heading>
          <Text
            variant="subtitle"
            marginBottom={['29px', '29px', '20px']}
            textAlign="center"
          >
            We make your ideas for web services a reality with a incredible Tech
            Stack
          </Text>
          <Button
            variant="service"
            onClick={() =>
              router.push('/#Contact', undefined, { scroll: false })
            }
          >
            Request a service!
          </Button>
          <Link href="#Services" scroll={false} title="Services">
            <NextPage />
          </Link>
          <SocialMedia />
        </Flex>
        <BigLogo
          width="189px"
          height="243px"
          display={['none', 'none', 'none', 'flex']}
          marginRight={['none', 'none', '100px', '65px', '139px']}
        />
      </Flex>
    </Container>
  )
}

export default Home
