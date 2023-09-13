import type { PropsWithChildren } from "react";
import { clsx } from "clsx";

import styles from "./Wrapper.module.scss";

type WrapperProps = {
  className?: string;
} & PropsWithChildren;

const Wrapper = ({ children, className = "" }: WrapperProps) => (
  <div className={clsx(styles.wrapper, className)}>{children}</div>
);

export default Wrapper;
