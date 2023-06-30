import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { MainContainer } from "./MainContainer";

const meta: Meta<typeof MainContainer> = {
  title: "Base/MainContainer",
  component: MainContainer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Главный контейнер для страниц
 */
export const Primary: Story = {
  render: () => (
    <MainContainer>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <h2>Some page</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, repudiandae debitis.
          Quae, eius saepe, quasi unde laboriosam magnam ab odit iusto molestias impedit maiores
          nulla! Itaque ut, error cumque eligendi quisquam libero accusamus impedit ab nam iusto
          eaque tempora iure hic? Obcaecati molestias voluptas alias hic, harum dignissimos ducimus
          asperiores?
        </p>
        <div style={{ display: "flex", gap: "15px" }}>
          <Button variant="contained">Button</Button>
          <Button variant="outlined">Button</Button>
        </div>
      </div>
    </MainContainer>
  ),
};
