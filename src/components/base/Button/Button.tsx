import type { ButtonProps as MuiButtonProps } from "@mui/material";
import { Button as MuiButton } from "@mui/material";
import { classNames } from "@src/utils/classNames";

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
    console.log(classNames);
    handleClick?.();
  };

  return (
    <MuiButton onClick={onClick} {...props}>
      {children}
    </MuiButton>
  );
};
