import type { Meta, StoryObj } from "@storybook/react";

import { mainContainerDecorator } from "@src/storybook/decorators";

import Notification from "./Notification";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Notification> = {
  title: "Components/Notification",
  component: Notification,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    playroom: {
      code: `
      <MainContainer>
        <Notification variant="reject"/>
      </MainContainer>
      `,
    },
  },
  argTypes: {
    subTitle: { control: "text" },
    title: { control: "text" },
    textAboveBtn: { control: "text" },
    Icon: {
      control: false,
    },
  },
  decorators: [mainContainerDecorator()],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Reject: Story = {
  args: {
    variant: "reject",
  },
  parameters: {
    playroom: {
      code: `
      <MainContainer>
        <Notification variant="reject"/>
      </MainContainer>
      `,
    },
  },
};

export const TechError: Story = {
  args: {
    variant: "techError",
  },
  parameters: {
    playroom: {
      code: `
      <MainContainer>
        <Notification variant="techError"/>
      </MainContainer>
      `,
    },
  },
};

export const WeRecognizedYou: Story = {
  args: {
    variant: "weRecognizedYou",
  },
  parameters: {
    playroom: {
      code: `
      <MainContainer>
        <Notification variant="weRecognizedYou"/>
      </MainContainer>
      `,
    },
  },
};
