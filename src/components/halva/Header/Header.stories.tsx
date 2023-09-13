import type { Meta, StoryObj } from "@storybook/react";

import { themeDecorator } from "@src/storybook/decorators";

import ivi from "@src/core/assets/img/ivi.png";

import Header from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  args: {
    btnText: "Оформить карту",
    withBtn: true,
    withHint: false,
    withPhone: false,
    withShadow: false,
    withNav: false,
  },
  argTypes: {
    Logo: { control: false },
    SecondLogo: { control: false },
  },
  parameters: {
    layout: "fullscreen",
    playroom: {
      code: `<Header />`,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RedTheme: Story = {
  args: { withBtn: false },
  parameters: {
    playroom: {
      code: `<Header withBtn={false}/>`,
    },
  },
};

export const DarkTheme: Story = {
  args: { withBtn: false },
  parameters: {
    playroom: {
      code: `<Header withBtn={false}/>`,
    },
  },
  decorators: [themeDecorator("dark")],
};

export const WithHintAndCountdown: Story = {
  args: {
    withHint: true,
    countdownTime: 1800000,
  },
  parameters: {
    playroom: {
      code: `<Header withHint countdownTime={1800000}/>`,
    },
  },
};

export const WithShadow: Story = {
  args: {
    withBtn: false,
    withShadow: true,
  },
  parameters: {
    playroom: {
      code: `<Header withBtn={false} withShadow/>`,
    },
  },
};

export const WithPhone: Story = {
  args: {
    withBtn: false,
    withPhone: true,
    PhoneProps: {
      phoneHint: "Звонок по России (бесплатно)",
      phones: ["8 800 555-35-35"],
    },
    logoColor: "red",
  },
  parameters: {
    playroom: {
      code: `<Header withBtn={false} withPhone PhoneProps={{phoneHint: "Звонок по России (бесплатно)", phones: ["8 800 555-35-35"]}} logoColor="red"/>`,
    },
  },
};

export const WithPhoneAndButton: Story = {
  args: {
    withPhone: true,
    PhoneProps: {
      phoneHint: "Звонок по России (бесплатно)",
      phones: ["8 800 555-35-35"],
    },
    logoColor: "red",
  },
  parameters: {
    playroom: {
      code: `<Header withPhone PhoneProps={{phoneHint: "Звонок по России (бесплатно)", phones: ["8 800 555-35-35"]}} logoColor="red" />`,
    },
  },
};

export const WithButton: Story = {
  args: { logoColor: "red" },
  parameters: {
    playroom: {
      code: `<Header logoColor="red" />`,
    },
  },
};

export const WithSecondLogo: Story = {
  args: {
    logoColor: "red",
    SecondLogo: <img src={ivi} alt="ivi" width={78} height={32} />,
  },
};

export const WithNavigation: Story = {
  args: { withNav: true },
  parameters: {
    playroom: {
      code: `<Header withNav />`,
    },
  },
};
