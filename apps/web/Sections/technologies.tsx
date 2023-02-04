import { Container, colors, NextPage, useMediaQuery, Text, Heading } from 'ui'
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
      <Heading variant="title" marginBottom={['30px', '30px', '40px']}>
        Technologies
      </Heading>
      <Text
        variant="subtitle"
        width={['281px', '281px', '540px']}
        textAlign="center"
      >
        We make your ideas for web services a reality with a incredible Tech
        Stack
      </Text>
      <Link href="#Contact" scroll={false} title="Contact">
        <NextPage />
      </Link>
    </Container>
  )
}

export default Technologies
