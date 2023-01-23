import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import RightArrow from 'ui/assets/RightArrow'

export default {
  title: 'Icons/RightArrow',
  component: RightArrow,
} as ComponentMeta<typeof RightArrow>

const Template: ComponentStory<typeof RightArrow> = () => (
  <RightArrow w={12} h={7} />
)

export const Primary = Template.bind({})

Primary.args = {}
