import { Flex } from '@chakra-ui/react'
import React from 'react'

interface CardProps {
  children: React.ReactNode
  display: object | string
}

export const Card: React.FC<CardProps> = ({ children, display }) => (
  <Flex
    width={['267px', '267px', '191px']}
    height={['106px', '106px', '258px']}
    backgroundColor="rgba(158, 77, 70, 0.1)"
    boxShadow="0px 0px 70px 2px rgba(0, 0, 0, 0.1)"
    borderRadius="10px 0px"
    justify="center"
    align="center"
    flexDirection={['row', 'row', 'column']}
    display={display}
  >
    {children}
  </Flex>
)
