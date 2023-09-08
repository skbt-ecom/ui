import type { Meta, StoryObj } from "@storybook/react";

import { themeDecorator } from "../../storybook/decorators";

import HeaderHalva from "./HeaderHalva";

import ivi from "../../core/assets/img/ivi.png";

const meta: Meta<typeof HeaderHalva> = {
  title: "Components/HeaderHalva",
  component: HeaderHalva,
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
    AdditionalLogo: { control: false },
  },
  parameters: {
    layout: "fullscreen",
    playroom: {
      code: `
      <MainContainer>
        <HeaderHalva />
      </MainContainer>
    `,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RedTheme: Story = {
  args: {
    withBtn: false,
  },
};

export const DarkTheme: Story = {
  args: {
    withBtn: false,
  },
  decorators: [themeDecorator("dark")],
};

export const WithHintAndCountdown: Story = {
  args: {
    withHint: true,
    countdownTime: 1800000,
  },
};

export const WithShadow: Story = {
  args: {
    withBtn: false,
    withShadow: true,
  },
};

export const WithPhone: Story = {
  args: {
    withBtn: false,
    withPhone: true,
    PhoneProps: {
      phoneHint: "Звонок по России (бесплатно)",
      phones: ["8 800 100-10-20"],
    },
  },
};

export const WithPhoneAndButton: Story = {
  args: {
    withPhone: true,
    PhoneProps: {
      phoneHint: "Звонок по России (бесплатно)",
      phones: ["8 800 100-10-20"],
    },
  },
};

export const WithButton: Story = {
  args: {},
};

export const WithAdditionalLogo: Story = {
  args: {
    AdditionalLogo: () => <img src={ivi} alt="ivi" width={78} height={32} />,
  },
};

export const WithNavigation: Story = {
  args: {
    withNav: true,
    orderNum: "99",
  },
};
