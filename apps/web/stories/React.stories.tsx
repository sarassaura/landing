import { ComponentStory, ComponentMeta } from '@storybook/react'

import React from 'ui/assets/React'

export default {
  title: 'Icons/React',
  component: React,
} as ComponentMeta<typeof React>

const Template: ComponentStory<typeof React> = () => (
  <React width="91px" height="81px" />
)

export const Primary = Template.bind({})

Primary.args = {}
