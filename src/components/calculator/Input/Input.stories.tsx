import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Calculator/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    defaultValue: 5,
    max: 10,
    min: 0,
  },
};
