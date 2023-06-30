import type { ButtonProps as MuiButtonProps } from "@mui/material";
import { Button as MuiButton } from "@mui/material";

// Only include variant, size, and color
type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color" | "className">;

// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {
  children: string;
  handleClick?: () => void;
}

export const Button = ({ children, handleClick, ...props }: ButtonProps) => {
  return (
    <MuiButton onClick={handleClick} {...props}>
      {children}
    </MuiButton>
  );
};
