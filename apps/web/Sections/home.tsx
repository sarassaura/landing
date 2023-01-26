import { Container, colors } from 'ui'
import Link from 'next/link'

const Home = () => (
  <Container
    id="Home"
    direction="row"
    bgGradient={`linear(to-l,${colors.black.lightBackground}, ${colors.black.darkBackground})`}
  >
    <Link href="#Services" scroll={false}>
      <h1>Home</h1>
    </Link>
  </Container>
)

export default Home
