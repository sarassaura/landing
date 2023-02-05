import { Link, Stack } from '@chakra-ui/react'
import React from 'react'
import Github from './assets/Github'
import Twitter from './assets/Twitter'

interface SocialMediaProps {}

export const SocialMedia: React.FC<SocialMediaProps> = () => (
  <Stack
    direction="row"
    spacing="12px"
    position="absolute"
    bottom="0px"
    left={['143px', '143px', '143px', '143px', '215px']}
    display={['none', 'none', 'none', 'flex']}
    paddingY="40px"
  >
    <Link href="https://github.com/" isExternal title="Github">
      <Github width="20px" height="20px" />
    </Link>
    <Link href="https://twitter.com/" isExternal title="Twitter">
      <Twitter width="21px" height="17px" />
    </Link>
  </Stack>
)
