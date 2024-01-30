import type { SliderProps as MuiSliderProps } from "@mui/material";

type SliderBaseProps = Pick<MuiSliderProps, "className">;

export interface CustomSliderProps extends SliderBaseProps, MuiSliderProps {
  defaultValue: number;
  min: number;
  max: number;
  circle?: number;
}

export interface ITestSlider {
  left: number;
  width: number;
  height: number;
  toJSON: () => void;
  x: number;
  y: number;
  bottom: number;
  right: number;
  top: number;
}
