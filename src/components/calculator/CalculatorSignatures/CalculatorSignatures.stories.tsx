import type { Meta, StoryObj } from "@storybook/react";
import { CalculatorSignatures } from "./CalculatorSignatures";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CalculatorSignatures> = {
  title: "Calculator/CalculatorSignatures",
  component: CalculatorSignatures,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <CalculatorSignatures max={1000000} min={10000} />,
};
