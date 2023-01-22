import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SmallLogo from 'ui/assets/SmallLogo'

export default {
  title: 'Icons/SmallLogo',
  component: SmallLogo,
} as ComponentMeta<typeof SmallLogo>

const Template: ComponentStory<typeof SmallLogo> = () => (
  <SmallLogo w={22} h={27} />
)

export const Primary = Template.bind({})

Primary.args = {}
