import { useState } from "react";
import { CustomSlider } from "./styles";
import type { CustomSliderProps } from "./types";

export const Slider = ({ defaultValue, ...props }: CustomSliderProps) => {
  const [value, setValue] = useState(defaultValue);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <CustomSlider
      data-testid="SliderTestId"
      defaultValue={defaultValue}
      {...props}
      value={typeof value === "number" ? value : 0}
      onChange={handleSliderChange}
    />
  );
};
