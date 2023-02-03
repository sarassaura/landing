import { Flex } from '@chakra-ui/react'
import React from 'react'
import ReactScrollWheelHandler from 'react-scroll-wheel-handler'

interface ContainerProps {
  children: React.ReactNode
  direction: 'row' | 'column'
  bgGradient: string
  id: string
  changePage: (up: number) => void
}

export const Container: React.FC<ContainerProps> = ({
  children,
  direction,
  bgGradient,
  id,
  changePage,
}) => (
  <ReactScrollWheelHandler
    upHandler={(e) => {
      e.preventDefault()
      changePage(1)
    }}
    downHandler={(e) => {
      e.preventDefault()
      changePage(-1)
    }}
  >
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
  </ReactScrollWheelHandler>
)
