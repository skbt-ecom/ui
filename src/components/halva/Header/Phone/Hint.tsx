import { styled } from "@mui/material";

const Span = styled("span")(({ theme }) => ({
  color: [theme.palette.text.secondary],
  fontSize: "12px",
  lineHeight: "12px",
}));

type HintProps = {
  text: string;
};

const Hint = ({ text }: HintProps) => <Span>{text}</Span>;

export default Hint;
