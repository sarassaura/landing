import { Container, colors, NextPage, useMediaQuery, Text } from 'ui'
import { useRouter } from 'next/router'

import Link from 'next/link'

const Services = () => {
  const router = useRouter()
  const [isNotMobile] = useMediaQuery('(min-width: 48em)')
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
    >
      <Text>{isNotMobile ? 'Desktop Services' : 'Mobile Services'}</Text>
      <Link href="#Technologies" scroll={false}>
        <NextPage />
      </Link>
    </Container>
  )
}

export default Services
