import { useLayoutEffect, useState } from "react";
import { ThemeProvider as ThemeProviderMui } from "@mui/material";

import type { ReactNode } from "react";

import { blueTheme, darkTheme, lightTheme, redTheme } from "../../core/themes";

type ThemeProviderProps = {
  children: ReactNode;
  theme?: typeof redTheme;
};

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<typeof redTheme>(redTheme);

  const localStorageTheme = localStorage.getItem("theme");

  useLayoutEffect(() => {
    switch (localStorageTheme) {
      case "dark":
        setCurrentTheme(darkTheme);
        break;
      case "light":
        setCurrentTheme(lightTheme);
        break;
      case "blue":
        setCurrentTheme(blueTheme);
        break;
      case "red":
        setCurrentTheme(redTheme);
        break;
      default:
        break;
    }
  }, [localStorageTheme]);

  return <ThemeProviderMui theme={theme ?? currentTheme}>{children}</ThemeProviderMui>;
};

export default ThemeProvider;
