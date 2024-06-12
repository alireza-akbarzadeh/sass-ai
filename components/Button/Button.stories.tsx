import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./index"

const meta: Meta<typeof Button> = {
  title: "SasButton",
  component: Button,
  args: {
    variant: "solid",
    children: "Button",
    size: "1",
  },
  argTypes: {
    variant: {
      options: ["classic", "solid", "soft", "surface", "outline", "ghost"],
      control: { type: "select" },
    },
    size: {
      options: ["1", "2", "3", "4"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => <Button {...args} />,
}

export default meta
