import {
  Container,
  colors,
  NextPage,
  useMediaQuery,
  Text,
  Heading,
  Card,
  Stack,
  Flex,
} from 'ui'
import { useRouter } from 'next/router'

import Link from 'next/link'
import Typescript from 'ui/assets/Typescript'
import Mongo from 'ui/assets/Mongo'
import Graphql from 'ui/assets/Graphql'
import React from 'ui/assets/React'

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
      paddingTop={0}
    >
      <Heading
        marginTop={['74px', '74px', '0px']}
        variant="title"
        marginBottom={['30px', '30px', '40px']}
        fontSize={['40px', '40px', '50px']}
        lineHeight={['48px', '48px', '51px']}
      >
        Technologies
      </Heading>
      <Text
        variant="subtitle"
        width={['281px', '281px', '540px']}
        textAlign="center"
        marginBottom={['44px', '44px', '43px']}
      >
        We make your ideas for web services a reality with a incredible Tech
        Stack
      </Text>
      <Link href="#Contact" scroll={false} title="Contact">
        <NextPage />
      </Link>
      <Stack
        spacing={['44px', '44px', '30px']}
        direction={['column', 'column', 'row', 'row']}
        marginBottom={['94px', '94px', '0px']}
      >
        <Card display="flex">
          <Flex
            direction={['row', 'row', 'column']}
            align="center"
            width="100%"
            height="100%"
            marginTop={['auto', 'auto', '70px']}
            marginBottom={['auto', 'auto', '60px']}
            justify="space-between"
            marginX={['40px', '40px', 'auto']}
          >
            <Typescript
              width={['61px', '61px', '105px']}
              height={['40px', '40px', '69px']}
            />
            <Flex>Typescript</Flex>
          </Flex>
        </Card>
        <Card display="flex">
          <Flex
            align="center"
            direction={['row', 'row', 'column']}
            width="100%"
            height="100%"
            marginTop={['auto', 'auto', '44px']}
            marginBottom={['auto', 'auto', '60px']}
            justify="space-between"
            marginRight={['45px', '45px', 'auto']}
            marginLeft={['40px', '40px', 'auto']}
          >
            <Mongo
              width={['70px', '70px', '122px']}
              height={['70px', '70px', '122px']}
            />
            <Flex>MongoDB</Flex>
          </Flex>
        </Card>
        <Card display={['flex', 'flex', 'none', 'flex']}>
          <Flex
            align="center"
            direction={['row', 'row', 'column']}
            width="100%"
            height="100%"
            marginTop={['auto', 'auto', '60px']}
            marginBottom={['auto', 'auto', '60px']}
            justify="space-between"
            marginRight={['53px', '53px', 'auto']}
            marginLeft={['50px', '50px', 'auto']}
          >
            <Graphql
              width={['45.5px', '45.5', '90px']}
              height={['51px', '51px', '90px']}
            />
            <Flex>GraphQL</Flex>
          </Flex>
        </Card>
        <Card display={['flex', 'flex', 'none', 'none', 'flex']}>
          <Flex
            align="center"
            direction={['row', 'row', 'column']}
            width="100%"
            height="100%"
            marginTop={['auto', 'auto', '65px']}
            marginBottom={['auto', 'auto', '60px']}
            justify="space-between"
            marginRight={['75px', '75px', 'auto']}
            marginLeft={['46px', '46px', 'auto']}
          >
            <React
              width={['53px', '53px', '91px']}
              height={['47px', '47px', '81px']}
            />
            <Flex>React</Flex>
          </Flex>
        </Card>
      </Stack>
    </Container>
  )
}

export default Technologies
