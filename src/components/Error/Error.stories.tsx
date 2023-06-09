import type { Meta, StoryObj } from "@storybook/react";

import Error from "./Error";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Error> = {
  title: "Components/Error",
  component: Error,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Reject: Story = {
  args: {
    variant: "reject",
  },
};

export const Technical: Story = {
  args: {
    variant: "technical",
  },
};
