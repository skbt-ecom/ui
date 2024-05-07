import type { ReactElement } from "react";
import clsx from "clsx";
import styles from "./fieldLabel.module.scss";

interface IFieldLabelProps {
  name: string;
  label?: ReactElement | string;
  isActive?: boolean;
  labelClasses?: string;
}
export const FieldLabel = ({ name, labelClasses, isActive, label }: IFieldLabelProps) => {
  return (
    <label
      className={clsx(styles.label, labelClasses, { [styles.active]: isActive })}
      htmlFor={name}
    >
      {label}
    </label>
  );
};
