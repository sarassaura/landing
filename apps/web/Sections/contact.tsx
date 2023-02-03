import { Container, colors, Text, useMediaQuery } from 'ui'
import { useRouter } from 'next/router'

const Contact = () => {
  const router = useRouter()
  const [isNotMobile] = useMediaQuery('(min-width: 48em)')
  const changePage = (up: number) => {
    if (isNotMobile && up) {
      if (up > 0) {
        router.push('/#Technologies', undefined, { scroll: false })
      }
      if (up < 0) {
        router.push('/#Home', undefined, { scroll: false })
      }
    }
  }

  return (
    <Container
      id="Contact"
      direction="column"
      bgGradient={`linear(to-l,${colors.white.background}, ${colors.white.background})`}
      changePage={changePage}
    >
      <Text color={colors.black.text}>
        {isNotMobile ? 'Desktop Contact' : 'Mobile Contact'}
      </Text>
    </Container>
  )
}

export default Contact
