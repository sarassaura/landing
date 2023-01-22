import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import BigLogo from 'ui/assets/BigLogo'

export default {
  title: 'Icons/BigLogo',
  component: BigLogo,
} as ComponentMeta<typeof BigLogo>

const Template: ComponentStory<typeof BigLogo> = () => (
  <BigLogo w={189} h={243} />
)

export const Primary = Template.bind({})

Primary.args = {}
