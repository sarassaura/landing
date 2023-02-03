import { Container, colors, Text, useMediaQuery } from 'ui'

const Contact = () => {
  const [isNotMobile] = useMediaQuery('(min-width: 48em)')

  return (
    <Container
      id="Contact"
      direction="column"
      bgGradient={`linear(to-l,${colors.white.background}, ${colors.white.background})`}
    >
      <Text color={colors.black.text}>
        {isNotMobile ? 'Desktop Contact' : 'Mobile Contact'}
      </Text>
    </Container>
  )
}

export default Contact
