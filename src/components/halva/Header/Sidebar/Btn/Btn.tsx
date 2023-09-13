import { styled } from "@mui/material";

import { Button } from "../../../../base/Button";

import type { ButtonProps } from "../../../../base/Button";

const StyledBtn = styled(Button)(({ theme }) => ({
  width: "100%",
  height: "48px",
  margin: "auto auto 24px",
  background: [theme.palette.primary.main],
  textTransform: "none",
  borderStyle: "solid",
  borderRadius: "8px",
  color: "#fff",
}));

const Btn = ({ children }: ButtonProps) => {
  return <StyledBtn>{children}</StyledBtn>;
};

export default Btn;
