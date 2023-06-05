import React from "react";
import type { Story, Meta } from "@storybook/react";
import type { AccordionProps } from "./Accordion";
import { Accordion } from "./Accordion";

const meta = {
  title: "components/Accordion",
  component: Accordion,
  args: {
    isOpen: false,
    title: "My title",
    children: "Content",
  },
  parameters: {
    controls: {
      exclude: ["innerControl", "onToggle", "isOpen"],
    },
  },
} satisfies Meta<AccordionStoryProps>;

export default meta;

type AccordionStoryProps = Pick<AccordionProps, "title" | "children" | "isOpen">;

export const AccordionStoryTemplate: Story<AccordionStoryProps> = ({ ...args }) => (
  <Accordion {...args} innerControl />
);

AccordionStoryTemplate.storyName = "Accordion";

AccordionStoryTemplate.parameters = {
  // coming soon  https://github.com/storybookjs/addon-designs
  design: {
    type: "figma",
    url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  },
};

// ts error
//
