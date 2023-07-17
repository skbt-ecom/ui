import type { redTheme } from "..";
import { ThemeProvider } from "../components";

type Props = {
  theme: typeof redTheme;
  children: React.ReactNode;
};

export default ({ theme, children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
