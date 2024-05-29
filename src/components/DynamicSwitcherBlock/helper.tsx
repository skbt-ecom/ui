import type { ReactElement } from "react";
import type { TDocsIconsVariants } from "./types";
import { SvgDocsFilled } from "./icons";

const iconsVariants: Record<TDocsIconsVariants, ReactElement> = {
  outlineDoc: <SvgDocsFilled />,
  filledDoc: <>FILLED</>,
};

export const getIcon = (icon: TDocsIconsVariants) => {
  if (!icon) return null;
  const Icon = iconsVariants[icon];

  return Icon;
};
