import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from 'ui'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { variant: 'service', children: 'Request a service!' }
Primary.storyName = 'Service'
