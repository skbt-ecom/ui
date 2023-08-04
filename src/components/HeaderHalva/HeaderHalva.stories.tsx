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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RedTheme: Story = {
  args: {
    hasBtn: false,
  },
};

export const DarkTheme: Story = {
  args: {
    hasBtn: false,
  },
  decorators: [themeDecorator("dark")],
};

export const WithShadow: Story = {
  args: {
    hasBtn: false,
    hasShadow: true,
  },
};

export const WithPhone: Story = {
  args: {
    hasBtn: false,
    hasPhone: true,
    PhoneProps: {
      phoneHint: "Для звонков по России (бесплатно)",
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

export const WithCountdown: Story = {
  args: {
    hasTimer: true,
    countDownTime: 1800000,
  },
};
