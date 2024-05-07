import type { Meta, StoryObj } from "@storybook/react";
import { FieldLabel } from "./FieldLabel";

const meta: Meta<typeof FieldLabel> = {
  title: "Base/FieldLabel",
  component: FieldLabel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Главный контейнер для страниц
 */
export const Primary: Story = {
  render: () => <FieldLabel name="phone" label="Телефон" />,
};
