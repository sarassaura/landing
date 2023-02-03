import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Github from 'ui/assets/Github'

export default {
  title: 'Icons/Github',
  component: Github,
} as ComponentMeta<typeof Github>

const Template: ComponentStory<typeof Github> = () => (
  <Github width="20px" height="20px" />
)

export const Primary = Template.bind({})

Primary.args = {}
