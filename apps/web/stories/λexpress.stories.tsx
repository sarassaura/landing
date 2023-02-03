import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Express from 'ui/assets/λexpress'

export default {
  title: 'Icons/Typescript',
  component: Express,
} as ComponentMeta<typeof Express>

const Template: ComponentStory<typeof Express> = (args) => <Express {...args} />

export const Primary = Template.bind({})
Primary.args = { width: '28px', height: '141px', color: 'white' }
Primary.storyName = 'Light'

export const Secundary = Template.bind({})
Secundary.args = { ...Primary.args, color: '#696969' }
Secundary.parameters = {
  backgrounds: { default: 'light' },
}
Secundary.storyName = 'Dark'
