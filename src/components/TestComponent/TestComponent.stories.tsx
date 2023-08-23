import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { TestComponent } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TestComponent> = {
  title: "Base/TestComponent",
  component: TestComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  play: async ({ _args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Enter credentials", async () => {
      await userEvent.type(canvas.getByTestId("input"), "12345");
    });

    await step("Submit form", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });

    await waitFor(() => expect(canvas.getByTestId("output")).toContainHTML("12345-"));
  },
};
