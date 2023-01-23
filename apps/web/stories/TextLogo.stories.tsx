import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TextLogo from 'ui/assets/TextLogo'

export default {
  title: 'Icons/TextLogo',
  component: TextLogo,
} as ComponentMeta<typeof TextLogo>

const Template: ComponentStory<typeof TextLogo> = () => (
  <TextLogo w={23} h={17} />
)

export const Primary = Template.bind({})

Primary.args = {}
