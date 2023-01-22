import { ComponentStory, ComponentMeta } from '@storybook/react'

import React from 'ui/assets/React'

export default {
  title: 'Icons/React',
  component: React,
} as ComponentMeta<typeof React>

const Template: ComponentStory<typeof React> = () => <React w={91} h={81} />

export const Primary = Template.bind({})

Primary.args = {}
