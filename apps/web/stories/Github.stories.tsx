import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Github from 'ui/assets/Github'

export default {
  title: 'Icons/Github',
  component: Github,
} as ComponentMeta<typeof Github>

const Template: ComponentStory<typeof Github> = () => <Github w={20} h={20} />

export const Primary = Template.bind({})

Primary.args = {}
