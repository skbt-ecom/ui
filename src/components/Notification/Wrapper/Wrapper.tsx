import type { PropsWithChildren } from "react";

import { classNames } from "../../../utils/classNames";

import styles from "./Wrapper.module.scss";

type WrapperProps = {
  className?: string;
} & PropsWithChildren;

const Wrapper = ({ children, className = "" }: WrapperProps) => (
  <div className={classNames(styles.wrapper, {}, [className])}>{children}</div>
);

export default Wrapper;
