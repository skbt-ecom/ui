import type { Meta, StoryObj } from "@storybook/react";

import ErrorDouble from "./ErrorDouble";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Error> = {
  title: "Components/ErrorDouble",
  component: ErrorDouble,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
