import { Container, colors, NextPage, useMediaQuery, Text } from 'ui'
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
      <Text>{isNotMobile ? 'Desktop Home' : 'Mobile Home'}</Text>
      <Link href="#Services" scroll={false}>
        <NextPage />
      </Link>
    </Container>
  )
}

export default Home
