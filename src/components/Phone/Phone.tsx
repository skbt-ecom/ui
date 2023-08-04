import { useMemo } from "react";
import { styled } from "@mui/material";

import { PhoneNumber } from "./PhoneNumber";

export type PhoneProps = {
  phoneHint?: string;
  phones?: string[];
};

const Hint = styled("span")(({ theme }) => ({
  color: [theme.palette.text.secondary],
  marginTop: 4,
  fontSize: 12,
}));

const Phone = ({
  phoneHint = "Для звонков по России (бесплатно)",
  phones = ["8 800 100-10-20"],
}: PhoneProps) => {
  const hasHint = phones.length === 1 && phoneHint;

  const phoneNumbers = useMemo(
    () => phones.map((num, i) => <PhoneNumber number={num} key={i} />),
    [phones]
  );

  return (
    <div>
      {phoneNumbers}
      {hasHint && <Hint>{phoneHint}</Hint>}
    </div>
  );
};

export default Phone;
