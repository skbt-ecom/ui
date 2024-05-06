import type { Meta, StoryObj } from "@storybook/react";
import { Calculator } from "./Calculator";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Calculator> = {
  title: "Calculator/Calculator",
  component: Calculator,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <Calculator min={10000} max={1000000000} defaultValue={undefined} />,
};
