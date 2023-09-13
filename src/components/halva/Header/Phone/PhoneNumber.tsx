import { styled } from "@mui/material";

type PhoneNumberProps = {
  value?: string;
};

const PhoneLink = styled("a")(({ theme }) => ({
  color: [theme.palette.text.primary],
  fontWeight: 500,
  textDecoration: "none",
  fontSize: "22px",
  lineHeight: "22px",
}));

const PhoneNumber = ({ value }: PhoneNumberProps) => (
  <PhoneLink rel="nofollow" href={`tel:${value}`}>
    {value}
  </PhoneLink>
);

export default PhoneNumber;
