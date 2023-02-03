import { Container, colors, NextPage, useMediaQuery, Text } from 'ui'
import Link from 'next/link'

const Services = () => {
  const [isNotMobile] = useMediaQuery('(min-width: 48em)')

  return (
    <Container
      id="Services"
      direction="column"
      bgGradient={`linear(to-l,${colors.purple.lightBackground}, ${colors.purple.darkBackground})`}
    >
      <Text>{isNotMobile ? 'Desktop Services' : 'Mobile Services'}</Text>
      <Link href="#Technologies" scroll={false}>
        <NextPage />
      </Link>
    </Container>
  )
}

export default Services
