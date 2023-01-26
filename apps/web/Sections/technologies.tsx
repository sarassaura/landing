import { Container, colors } from 'ui'
import Link from 'next/link'

const Technologies = () => (
  <Container
    id="Technologies"
    direction="column"
    bgGradient={`linear(to-l,${colors.red.lightBackground}, ${colors.red.darkBackground})`}
  >
    <Link href="#Contact" scroll={false}>
      <h1>Technologies</h1>
    </Link>
  </Container>
)

export default Technologies
