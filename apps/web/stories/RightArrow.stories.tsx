import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import RightArrow from 'ui/assets/RightArrow'

export default {
  title: 'Icons/RightArrow',
  component: RightArrow,
} as ComponentMeta<typeof RightArrow>

const Template: ComponentStory<typeof RightArrow> = (args) => (
  <RightArrow {...args} />
)

export const Primary = Template.bind({})
Primary.args = { width: '12px', height: '7px', color: 'white' }
Primary.storyName = 'Light'

export const Secundary = Template.bind({})
Secundary.args = { ...Primary.args, color: '#838383' }
Secundary.parameters = {
  backgrounds: { default: 'light' },
}
Secundary.storyName = 'Dark'
