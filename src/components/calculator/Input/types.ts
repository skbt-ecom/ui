import type { InputProps as MuiInputProps } from "@mui/material";

type InputBaseProps = Pick<MuiInputProps, "className">;

export interface InputProps extends InputBaseProps, MuiInputProps {
  defaultValue: number;
  min: number;
  max: number;
}
