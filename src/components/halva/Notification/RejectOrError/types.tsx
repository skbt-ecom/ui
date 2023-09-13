import type { FC, HTMLProps, JSX } from "react";

export type Items = {
  defaultIcon: FC<Partial<HTMLProps<SVGElement>>>;
  defaultTitle: JSX.Element;
  defaultSubTitle: JSX.Element;
  defaultBtnText: string;
};

export type Variant = "reject" | "techError";
