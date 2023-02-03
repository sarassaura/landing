import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Twitter from 'ui/assets/Twitter'

export default {
  title: 'Icons/Twitter',
  component: Twitter,
} as ComponentMeta<typeof Twitter>

const Template: ComponentStory<typeof Twitter> = () => (
  <Twitter width="21px" height="17px" />
)

export const Primary = Template.bind({})

Primary.args = {}
