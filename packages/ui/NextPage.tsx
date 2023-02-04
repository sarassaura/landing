import { Flex } from '@chakra-ui/react'
import React from 'react'
import Chevron from './assets/Chevron'

interface NextPageProps {}

export const NextPage: React.FC<NextPageProps> = () => (
  <Flex
    position="absolute"
    bottom="0px"
    left="50%"
    display={['none', 'none', 'flex']}
    paddingY="40px"
    paddingX="26px"
  >
    <Chevron width="26px" height="17px" />
  </Flex>
)
