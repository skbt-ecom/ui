import type { Meta, StoryObj } from "@storybook/react";
import { SliderCalculator } from "./SliderCalculator";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SliderCalculator> = {
  title: "Calculator/Slider",
  component: SliderCalculator,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <SliderCalculator defaultValue={[50_000]} max={100_000_000} min={0} />,
};
