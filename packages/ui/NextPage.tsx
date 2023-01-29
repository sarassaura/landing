import React from 'react'
import Chevron from './assets/Chevron'

interface NextPageProps {}

export const NextPage: React.FC<NextPageProps> = () => (
  <Chevron width="26px" height="17px" display={['none', 'none', 'flex']} />
)
