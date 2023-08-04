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

export const RedTheme: Story = {};

export const DarkTheme: Story = {
  args: {
    btnText: "Получить карту",
  },
  decorators: [themeDecorator("dark")],
};

export const WithCountdown: Story = {
  args: {
    hasTimer: true,
    countDownTime: 1800000,
  },
};

export const WithAdditionalLogo: Story = {
  args: {
    AdditionalLogo: () => <img src={ivi} alt="ivi" width={78} height={32} />,
  },
};

export const WithPhone: Story = {
  args: {
    hasPhone: true,
    PhoneProps: {
      phoneHint: "Для звонков по России (бесплатно)",
      phones: ["8 800 100-10-20"],
    },
  },
};
