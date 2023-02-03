import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Typescript from 'ui/assets/Typescript'

export default {
  title: 'Icons/Typescript',
  component: Typescript,
} as ComponentMeta<typeof Typescript>

const Template: ComponentStory<typeof Typescript> = () => (
  <Typescript width="105px" height="69px" />
)

export const Primary = Template.bind({})

Primary.args = {}
