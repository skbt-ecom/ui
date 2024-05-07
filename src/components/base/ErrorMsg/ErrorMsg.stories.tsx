import type { Meta, StoryObj } from "@storybook/react";
import { ErrorMsg } from "./ErrorMsg";

const meta: Meta<typeof ErrorMsg> = {
  title: "Base/ErrorMsg",
  component: ErrorMsg,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Главный контейнер для страниц
 */
export const Primary: Story = {
  render: () => (
    <ErrorMsg>
      <div>Неправильно набран номер</div>
    </ErrorMsg>
  ),
};
