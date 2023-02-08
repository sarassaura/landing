import {
  Container,
  colors,
  Text,
  useMediaQuery,
  Heading,
  Stack,
  InputBox,
  Button,
} from 'ui'
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
      paddingTop={66}
    >
      <Heading
        variant="title"
        color="#696969"
        marginBottom={['135px', '135px', '40px']}
        fontSize={['40px', '40px', '50px']}
        lineHeight={['48px', '48px', '51px']}
      >
        Contact
      </Heading>
      <Text
        variant="subtitle"
        display={['none', 'none', 'flex']}
        color="#696969"
        marginBottom="37px"
      >
        We make your ideas for web services a reality with a incredible Tech
        Stack
      </Text>
      <Stack
        spacing="47px"
        direction="column"
        width={['294px', '294px', '513px']}
      >
        <InputBox placeholder="Name" />
        <InputBox placeholder="Email" />
        <InputBox placeholder="Describe your project here!" />
        <Stack spacing={['15px', '15px', '25px']} direction="row">
          <Button variant="contact">A website</Button>
          <Button variant="contact">Modernization</Button>
          <Button variant="contact">A website</Button>
        </Stack>
        <Button variant="send">SEND</Button>
      </Stack>
    </Container>
  )
}

export default Contact
