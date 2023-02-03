import { Flex } from '@chakra-ui/react'
import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  direction: 'row' | 'column'
  bgGradient: string
  id: string
}

export const Container: React.FC<ContainerProps> = ({
  children,
  direction,
  bgGradient,
  id,
}) => (
  <Flex
    id={id}
    width="100%"
    height="100%"
    minH="100vh"
    justify="center"
    align="center"
    bgGradient={bgGradient}
    direction={direction}
    paddingLeft={[0, 0, 79]}
    paddingTop={[0, 0, 66]}
  >
    {children}
  </Flex>
)
