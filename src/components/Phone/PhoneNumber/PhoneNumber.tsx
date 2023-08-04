import { styled } from "@mui/material";

type PhoneNumberProps = {
  number?: string;
};

const PhoneLink = styled("a")(({ theme }) => ({
  color: [theme.palette.text.primary],
  fontWeight: 500,
  fontSize: 22,
  textDecoration: "none",
  lineHeight: 1,
  display: "block",
}));

const PhoneNumber = ({ number }: PhoneNumberProps) => (
  <PhoneLink rel="nofollow" href={`tel:${number}`}>
    {number}
  </PhoneLink>
);

export default PhoneNumber;
