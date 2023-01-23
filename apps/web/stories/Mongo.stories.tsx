import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Mongo from 'ui/assets/Mongo'

export default {
  title: 'Icons/Mongo',
  component: Mongo,
} as ComponentMeta<typeof Mongo>

const Template: ComponentStory<typeof Mongo> = () => <Mongo w={122} h={122} />

export const Primary = Template.bind({})

Primary.args = {}
