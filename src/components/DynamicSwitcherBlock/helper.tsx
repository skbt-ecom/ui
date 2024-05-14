import type { ReactElement } from "react";
import { SvgDocsFilled } from "./icons";
import type { TDocsIconsVariants } from "./types";

const iconsVariants: Record<TDocsIconsVariants, ReactElement> = {
  outlineDoc: <SvgDocsFilled />,
  filledDoc: <>FILLED</>,
};

export const getIcon = (icon: TDocsIconsVariants) => {
  if (!icon) return null;
  const Icon = iconsVariants[icon];

  return Icon;
};
