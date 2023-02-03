import { Container, colors, NextPage, useMediaQuery, Text } from 'ui'
import Link from 'next/link'

const Technologies = () => {
  const [isNotMobile] = useMediaQuery('(min-width: 48em)')

  return (
    <Container
      id="Technologies"
      direction="column"
      bgGradient={`linear(to-l,${colors.red.lightBackground}, ${colors.red.darkBackground})`}
    >
      <Text>
        {isNotMobile ? 'Desktop Technologies' : 'Mobile Technologies'}
      </Text>
      <Link href="#Contact" scroll={false}>
        <NextPage />
      </Link>
    </Container>
  )
}

export default Technologies
