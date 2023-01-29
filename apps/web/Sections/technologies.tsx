import { Container, colors, NextPage, useMediaQuery, Text } from 'ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Technologies = () => {
  const router = useRouter()
  const [isNotMobile] = useMediaQuery('(min-width: 48em)')
  const changePage = (up: number) => {
    if (isNotMobile && up) {
      if (up > 0) {
        router.push('/#Services', undefined, { scroll: false })
      }
      if (up < 0) {
        router.push('/#Contact', undefined, { scroll: false })
      }
    }
  }
  return (
    <Container
      id="Technologies"
      direction="column"
      bgGradient={`linear(to-l,${colors.red.lightBackground}, ${colors.red.darkBackground})`}
      changePage={changePage}
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
