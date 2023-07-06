import { useLayoutEffect, useState } from "react";
import { ThemeProvider as ThemeProviderMui } from "@mui/material";

import type { ReactNode } from "react";

import { blueTheme, darkTheme, redTheme } from "../../../core/themes";

type ThemeProviderProps = {
  children: ReactNode;
  theme?: typeof redTheme;
  key?: string;
};

const ThemeProvider = ({ theme, key = "theme", children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<typeof redTheme>(redTheme);

  const localStorageTheme = localStorage.getItem(key);

  useLayoutEffect(() => {
    switch (localStorageTheme) {
      case "dark":
        setCurrentTheme(darkTheme);
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
