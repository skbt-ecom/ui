import * as React from "react";

import type { SliderProps as MuiSliderProps } from "@mui/material";
import { Slider as MuiSlider } from "@mui/material";

import { styled } from "@mui/material/styles";

type SliderBaseProps = Pick<MuiSliderProps, "className">;

export interface CustomSliderProps extends SliderBaseProps, MuiSliderProps {
  defaultValue: number;
  min: number;
  max: number;
  circle?: number;
}

const CustomSlider = styled(MuiSlider)<CustomSliderProps>(({ circle = "32" }) => ({
  "& .MuiSlider-markLabel": {
    display: "none",
  },
  "& .MuiSlider-track": {
    borderRadius: "initial",
  },
  "& .MuiSlider-thumb": {
    width: `${circle}px`,
    height: `${circle}px`,
    border: "3.5px solid #003791",
    color: "#fff",
  },
}));

export const Slider = ({ defaultValue, ...props }: CustomSliderProps) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <CustomSlider
      defaultValue={defaultValue}
      {...props}
      value={typeof value === "number" ? value : 0}
      onChange={handleSliderChange}
    />
  );
};
