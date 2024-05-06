import type { ReactElement } from "react";
import clsx from "clsx";
import styles from "./errorMsg.module.scss";

interface IErrorMsgProps {
  children: ReactElement | string;
  Element?: "div" | "span" | "p";
  errorMsgClasses?: string;
}
export const ErrorMsg = ({ children, errorMsgClasses, Element = "p" }: IErrorMsgProps) => {
  return <Element className={clsx(styles.errorMsg, errorMsgClasses)}>{children}</Element>;
};
