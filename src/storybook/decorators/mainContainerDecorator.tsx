import type { Decorator } from "@storybook/react";

import { MainContainer } from "@src/components";

const mainContainerDecorator = (): Decorator => (Story) =>
  (
    <MainContainer>
      <Story />
    </MainContainer>
  );

export default mainContainerDecorator;
