import type { Meta, StoryObj } from "@storybook/react";

import { themeDecorator, mainContainerDecorator } from "@src/storybook/decorators";

import ivi from "@src/core/assets/img/ivi.png";

import HeaderHalva from "./HeaderHalva";

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
    SecondLogo: { control: false },
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
  decorators: [mainContainerDecorator()],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RedTheme: Story = {
  args: { withBtn: false },
  parameters: {
    playroom: {
      code: `
      <MainContainer>
        <HeaderHalva withBtn={false}/>
      </MainContainer>
    `,
    },
  },
};

export const DarkTheme: Story = {
  args: { withBtn: false },
  parameters: {
    playroom: {
      code: `
      <MainContainer>
        <HeaderHalva withBtn={false}/>
      </MainContainer>
    `,
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
      code: `
      <MainContainer>
        <HeaderHalva withHint countdownTime={1800000}/>
      </MainContainer>
    `,
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
      code: `
      <MainContainer>
        <HeaderHalva withBtn={false} withShadow/>
      </MainContainer>
    `,
    },
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
  parameters: {
    playroom: {
      code: `
      <MainContainer>
        <HeaderHalva withBtn={false} withPhone PhoneProps={phoneHint: "Звонок по России (бесплатно)", phones: ["8 800 100-10-20"]} />
      </MainContainer>
    `,
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
  parameters: {
    playroom: {
      code: `
      <MainContainer>
        <HeaderHalva withPhone PhoneProps={phoneHint: "Звонок по России (бесплатно)", phones: ["8 800 100-10-20"]} />
      </MainContainer>
    `,
    },
  },
};

export const WithButton: Story = {
  args: {},
};

export const WithSecondLogo: Story = {
  args: { SecondLogo: () => <img src={ivi} alt="ivi" width={78} height={32} /> },
};

export const WithNavigation: Story = {
  args: { withNav: true },
  parameters: {
    playroom: {
      code: `
      <MainContainer>
        <HeaderHalva withNav />
      </MainContainer>
    `,
    },
  },
};
