import type { Meta, StoryObj } from "@storybook/react";

import Phone from "./Phone";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Phone> = {
  title: "Components/Phone",
  component: Phone,
  tags: ["autodocs"],
  parameters: {
    playroom: {
      code: `
        <MainContainer>
          <Phone/>
        </MainContainer>
      `,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
  parameters: {
    playroom: {
      code: `
        <MainContainer>
          <Phone />
        </MainContainer>
      `,
    },
  },
};
