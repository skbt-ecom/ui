import type { ReactNode } from "react";
import { clsx } from "clsx";
import styles from "./responsiveContainer.module.scss";

interface IResponsiveContainerProps {
  className?: string;
  children: ReactNode;
}
export const ResponsiveContainer = ({ className, children }: IResponsiveContainerProps) => (
  <div className={clsx(styles.container, className)}>{children}</div>
);
