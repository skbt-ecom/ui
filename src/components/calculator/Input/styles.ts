import { styled } from "@mui/material/styles";

import TextField from "@mui/material/TextField";

export const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  input: {
    "&[type=number]": {
      MozAppearance: "textfield",
    },
    "&::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "&::-webkit-inner-spin-button": {
      WwebkitAppearance: "none",
      margin: 0,
    },
  },
});
