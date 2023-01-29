import { Flex } from '@chakra-ui/react'
import React, { useMemo } from 'react'

interface ContainerProps {
  children: React.ReactNode
  direction: 'row' | 'column'
  bgGradient: string
  id: string
  changePage: (up: number) => void
}

const throttle = (fn: () => void, delay: number) => {
  let lasTime = 0
  return () => {
    const now = new Date().getTime()
    if (now - lasTime < delay) return
    lasTime = now
    fn()
  }
}

export const Container: React.FC<ContainerProps> = ({
  children,
  direction,
  bgGradient,
  id,
  changePage,
}) => {
  const onWheelThrottled = useMemo(
    () => throttle(() => changePage(-200), 500),
    [changePage]
  )

  return (
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
      onWheel={() => onWheelThrottled()}
    >
      {children}
    </Flex>
  )
}
