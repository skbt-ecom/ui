import type { FC, HTMLProps } from "react";

export type Items = {
  Icon: FC<Partial<HTMLProps<SVGElement>>>;
  title: JSX.Element;
  subTitle: JSX.Element;
  btnText: string;
};

export type Variant = "we-are-sorry" | "something-went-wrong";
