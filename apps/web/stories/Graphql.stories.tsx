import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Graphql from 'ui/assets/Graphql'

export default {
  title: 'Icons/Graphql',
  component: Graphql,
} as ComponentMeta<typeof Graphql>

const Template: ComponentStory<typeof Graphql> = () => (
  <Graphql width="90px" height="90px" />
)

export const Primary = Template.bind({})

Primary.args = {}
