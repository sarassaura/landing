import {
  Container,
  colors,
  NextPage,
  useMediaQuery,
  Text,
  Heading,
  Button,
  Flex,
} from 'ui'
import { useRouter } from 'next/router'

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
      direction="column"
      bgGradient={`linear(to-l,${colors.black.lightBackground}, ${colors.black.darkBackground})`}
      changePage={changePage}
    >
      <Flex
        direction="column"
        marginX={['45px', '45px', '139px']}
        width={['330px', '330px', '567px']}
        align={['center', 'center', 'start']}
      >
        <Heading
          variant="title"
          marginBottom={['29px', '29px', '31px']}
          textAlign={['center', 'center', 'start']}
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
        <Button variant="service">Request a service!</Button>
        <Link href="#Services" scroll={false} title="Services">
          <NextPage />
        </Link>
      </Flex>
    </Container>
  )
}

export default Home
