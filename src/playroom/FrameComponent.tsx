import CssBaseline from "@mui/material/CssBaseline";

import type { redTheme } from "..";
import { ThemeProvider } from "../components";
import "./frameComponent.scss";

type Props = {
  theme: typeof redTheme;
  children: React.ReactNode;
};

export default ({ theme, children }: Props) => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);
