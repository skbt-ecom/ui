import { useMemo } from "react";

import { PhoneNumber } from "./PhoneNumber";
import { Hint } from "./Hint";

export type PhoneClasses = {
  phoneContainer?: string;
  phoneNumber?: string;
  hint?: string;
};

export type PhoneProps = {
  phoneHint?: string;
  phones?: string[];
  classes?: PhoneClasses;
};

const Phone = ({
  phoneHint = "Для звонков по России (бесплатно)",
  phones = ["8 800 100-10-20"],
  classes,
}: PhoneProps) => {
  const hasHint = phones.length === 1 && phoneHint;

  const phoneNumbers = useMemo(
    () => phones.map((num, i) => <PhoneNumber number={num} key={i} />),
    [phones]
  );

  return (
    <div className={classes?.phoneContainer}>
      {phoneNumbers}
      {hasHint && <Hint>{phoneHint}</Hint>}
    </div>
  );
};

export default Phone;
