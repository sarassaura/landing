import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Typescript from 'ui/assets/Typescript'

export default {
  title: 'Icons/Typescript',
  component: Typescript,
} as ComponentMeta<typeof Typescript>

const Template: ComponentStory<typeof Typescript> = () => (
  <Typescript w={105} h={69} />
)

export const Primary = Template.bind({})

Primary.args = {}
