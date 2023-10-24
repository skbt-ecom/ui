import type { ButtonProps as MuiButtonProps } from "@mui/material";
import { Button as MuiButton } from "@mui/material";
import test from "./test.json";
import styles from "./Button.module.scss";

// Only include variant, size, and color
type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color" | "className">;

// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {
  children: string;
  handleClick?: () => void;
}

export const Button = ({ children, handleClick, ...props }: ButtonProps) => {
  // test alias - TODO:: remove
  const onClick = () => {
    // eslint-disable-next-line no-console
    console.log(test.name, test, styles);
    handleClick?.();
  };

  return (
    <MuiButton onClick={onClick} {...props}>
      {children}
    </MuiButton>
  );
};
