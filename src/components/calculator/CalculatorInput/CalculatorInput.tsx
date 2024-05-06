import type { InputHTMLAttributes } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Controller } from "react-hook-form";
import type { TErrorInput } from "./type";
import { ErrorMsg } from "../../base/ErrorMsg";
import { FieldLabel } from "../../base/FieldLabel";
import styles from "./calculatorInput.module.scss";

interface IInputControlProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<T>;
  control: Control<T>;
  error: TErrorInput;
  label?: string;
  labelClasses?: string;
}

export const CalculatorInput = <T extends FieldValues>({
  name,
  control,
  error,
  label,
  labelClasses,
  ...props
}: IInputControlProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <>
            <input
              className={styles.input}
              name={name}
              value={value}
              id={name}
              onChange={(e) => {
                onChange(e);
              }}
              {...props}
            />
            {label && <FieldLabel labelClasses={labelClasses} name={name} label={label} />}

            {error && <ErrorMsg>{error}</ErrorMsg>}
          </>
        );
      }}
    />
  );
};
