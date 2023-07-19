import { redTheme, darkTheme, blueTheme } from "../src/core/themes";
import type { Preview } from "@storybook/react";

import { CssBaseline } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { ThemeProvider } from "../src/components";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

const customViewports = {
  small: {
    name: "300",
    styles: {
      width: "300px",
      height: "700px",
    },
  },
  mobile: {
    name: "360",
    styles: {
      width: "360px",
      height: "700px",
    },
  },
  tablet: {
    name: "600",
    styles: {
      width: "600px",
      height: "700px",
    },
  },
  desktop: {
    name: "960",
    styles: {
      width: "960px",
      height: "700px",
    },
  },
  large_desktop: {
    name: "1280",
    styles: {
      width: "1280px",
      height: "700px",
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // backgrounds: {
    //   default: "dark",
    //   values: [
    //     {
    //       name: "dark",
    //       value: "rgb(17 24 39)",
    //     },
    //   ],
    // },
    a11y: {
      manual: false,
    },
    darkMode: {
      current: "darkMode",
    },
    // grid: {
    //   // gridOn: true,
    //   // columns: 12,
    //   // gap: '20px',
    //   // gutter: '50px',
    //   // maxWidth: '1024px',
    // },
    viewport: {
      viewports: { ...customViewports, ...INITIAL_VIEWPORTS },
      defaultViewport: "960",
    },
  },
};

export default preview;

/* snipped for brevity */

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      dark: darkTheme,
      red: redTheme,
      blue: blueTheme,
    },
    defaultTheme: "red",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
