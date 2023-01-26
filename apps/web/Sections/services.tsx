import { Container, colors } from 'ui'
import Link from 'next/link'

const Services = () => (
  <Container
    id="Services"
    direction="column"
    bgGradient={`linear(to-l,${colors.purple.lightBackground}, ${colors.purple.darkBackground})`}
  >
    <Link href="#Technologies" scroll={false}>
      <h1>Services</h1>
    </Link>
  </Container>
)

export default Services
