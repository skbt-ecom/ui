import type { Meta, StoryObj } from "@storybook/react";
import PhoneContainer from "./Phone";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PhoneContainer> = {
  title: "Components/PhoneContainer",
  component: PhoneContainer,
  tags: ["autodocs"],
  parameters: {
    playroom: {
      code: `
        <MainContainer>
          <PhoneContainer/>
        </MainContainer>
      `,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PhoneWithHint: Story = {
  parameters: {
    playroom: {
      code: `
        <MainContainer>
          <PhoneContainer />
        </MainContainer>
      `,
    },
  },
};

export const MultiplePhones: Story = {
  args: { phones: ["8 800 100-77-72", "8 800 100-10-20"] },
  parameters: {
    playroom: {
      code: `
        <MainContainer>
          <PhoneContainer phones={["8 800 100-77-72", "8 800 100-10-20"]}/>
        </MainContainer>
      `,
    },
  },
};
