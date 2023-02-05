import { Container, colors, Text, useMediaQuery, Heading } from 'ui'
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
      <Heading
        variant="title"
        color="#696969"
        marginBottom="40px"
        fontSize={['40px', '40px', '50px']}
        lineHeight={['48px', '48px', '51px']}
      >
        Contact
      </Heading>
      <Text
        variant="subtitle"
        display={['none', 'none', 'flex']}
        color="#696969"
      >
        We make your ideas for web services a reality with a incredible Tech
        Stack
      </Text>
    </Container>
  )
}

export default Contact
