import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from 'ui'

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = () => <Button />

export const Primary = Template.bind({})

Primary.args = {}
