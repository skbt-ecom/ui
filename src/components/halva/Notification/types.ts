import type { FC, HTMLProps, ReactNode } from "react";

export type RejectOrErrorItems = {
  Icon?: FC<Partial<HTMLProps<SVGElement>>>;
  title?: ReactNode;
  subTitle?: ReactNode;
  btnText?: string;
};

export type WeRecognizedYouItems = { textAboveBtn?: ReactNode } & RejectOrErrorItems;
