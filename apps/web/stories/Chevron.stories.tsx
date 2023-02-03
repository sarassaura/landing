import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Chevron from 'ui/assets/Chevron'

export default {
  title: 'Icons/Chevron',
  component: Chevron,
} as ComponentMeta<typeof Chevron>

const Template: ComponentStory<typeof Chevron> = () => (
  <Chevron width="26px" height="17px" />
)

export const Primary = Template.bind({})

Primary.args = {}
