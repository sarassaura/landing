import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Graphql from 'ui/assets/Graphql'

export default {
  title: 'Icons/Graphql',
  component: Graphql,
} as ComponentMeta<typeof Graphql>

const Template: ComponentStory<typeof Graphql> = () => <Graphql w={90} h={90} />

export const Primary = Template.bind({})

Primary.args = {}
