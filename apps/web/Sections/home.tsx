import { Container, colors, NextPage, useMediaQuery, Text } from 'ui'

import Link from 'next/link'

const Home = () => {
  const [isNotMobile] = useMediaQuery('(min-width: 48em)')

  return (
    <Container
      id="Home"
      direction="column"
      bgGradient={`linear(to-l,${colors.black.lightBackground}, ${colors.black.darkBackground})`}
    >
      <Text>{isNotMobile ? 'Desktop Home' : 'Mobile Home'}</Text>
      <Link href="#Services" scroll={false}>
        <NextPage />
      </Link>
    </Container>
  )
}

export default Home
