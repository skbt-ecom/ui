import { styled } from "@mui/material/styles";
import { Slider as MuiSlider } from "@mui/material";
import type { CustomSliderProps } from "./types";

export const CustomSlider = styled(MuiSlider)<CustomSliderProps>(({ circle = "32" }) => ({
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
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0 0 0 8px rgba(0,0,0,.1)",
    },
  },
  "& .css-1gv0vcd-MuiSlider-track": {
    border: "none",
  },
  "& .css-14pt78w-MuiSlider-rail": {
    color: "#f2f2f2",
  },
}));
