import type { Meta, StoryObj } from "@storybook/react";

import Reject from "./Reject";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Reject> = {
  title: "Components/Reject",
  component: Reject,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WeAreSorry: Story = {
  args: {
    variant: "we-are-sorry",
  },
};

export const SomethingWentWong: Story = {
  args: {
    variant: "something-went-wrong",
  },
};
