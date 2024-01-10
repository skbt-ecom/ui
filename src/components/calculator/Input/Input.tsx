import * as React from "react";

import { styled } from "@mui/material/styles";
import type { InputProps as MuiInputProps } from "@mui/material";
import TextField from "@mui/material/TextField";

type InputBaseProps = Pick<MuiInputProps, "className">;

export interface InputProps extends InputBaseProps, MuiInputProps {
  defaultValue: number;
  min: number;
  max: number;
}

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  input: {
    "&[type=number]": {
      "-moz-appearance": "textfield",
    },
    "&::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "&::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
});

export const Input = ({ defaultValue, min, max }: InputProps) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < min) {
      setValue(min);
    } else if (value > max) {
      setValue(max);
    }
  };

  return (
    <CustomTextField
      value={value}
      size="small"
      onChange={handleInputChange}
      id="outlined-start-adornment"
      onBlur={handleBlur}
      inputProps={{
        step: null,
        defaultValue,
        min,
        max,
        type: "number",
        disableUnderline: true,
      }}
    />
  );
};
