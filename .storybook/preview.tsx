import type { Preview } from "@storybook/react"

import "@radix-ui/themes/styles.css"
import { Theme } from "@radix-ui/themes"

const preview: Preview = {
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
