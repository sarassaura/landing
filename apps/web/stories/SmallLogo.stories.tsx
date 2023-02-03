import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SmallLogo from 'ui/assets/SmallLogo'

export default {
  title: 'Icons/SmallLogo',
  component: SmallLogo,
} as ComponentMeta<typeof SmallLogo>

const Template: ComponentStory<typeof SmallLogo> = () => (
  <SmallLogo width="22px" height="27px" />
)

export const Primary = Template.bind({})

Primary.args = {}
