import type { ChangeEvent } from "react";
import { useState } from "react";

import type { InputProps } from "./types";

import { CustomTextField } from "./styles";

export const Input = ({ defaultValue, min, max }: InputProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        min,
        max,
        type: "number",
        "data-testid": "TextFieldTestId",
      }}
    />
  );
};
