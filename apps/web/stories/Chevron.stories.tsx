import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Chevron from 'ui/assets/Chevron'

export default {
  title: 'Icons/Chevron',
  component: Chevron,
} as ComponentMeta<typeof Chevron>

const Template: ComponentStory<typeof Chevron> = () => <Chevron w={26} h={17} />

export const Primary = Template.bind({})

Primary.args = {}
