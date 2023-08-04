import { styled } from "@mui/material";

const Hint = styled("span")(({ theme }) => ({
  color: [theme.palette.text.secondary],
  marginTop: 4,
  fontSize: 12,
}));

export default Hint;
