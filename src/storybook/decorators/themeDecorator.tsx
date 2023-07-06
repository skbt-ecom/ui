import type { Decorator } from "@storybook/react";
import { ThemeProvider } from "../../components";

type Types = "dark" | "blue" | "red";

const themeDecorator =
  (theme: Types): Decorator =>
  (Story) => {
    localStorage.setItem("theme", theme);

    return (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    );
  };

export default themeDecorator;
