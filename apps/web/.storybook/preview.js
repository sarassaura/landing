import { themes } from '@storybook/theming'
import { theme } from 'ui'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
  chakra: {
    theme,
    resetCSS: true,
  },
}
