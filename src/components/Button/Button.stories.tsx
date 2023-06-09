import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
    color: "primary",
    variant: "contained",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    color: "secondary",
    variant: "outlined",
  },
};
