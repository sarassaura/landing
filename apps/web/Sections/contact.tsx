import { Container, colors, Text } from 'ui'
import Link from 'next/link'

const Contact = () => (
  <Container
    id="Contact"
    direction="column"
    bgGradient={`linear(to-l,${colors.white.background}, ${colors.white.background})`}
  >
    <Link href="#Home" scroll={false}>
      <Text color={colors.black.text}>Contact</Text>
    </Link>
  </Container>
)

export default Contact
