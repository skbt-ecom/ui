import { useMemo } from "react";
import { PhoneNumber } from "./PhoneNumber";

import styles from "./Phone.module.scss";

export type PhoneProps = {
  phoneHint?: string;
  phones?: string[];
};

const Phone = ({
  phoneHint = "Для звонков по России (бесплатно)",
  phones = ["8 800 100-10-20"],
}: PhoneProps) => {
  const hasHint = phones.length === 1 && phoneHint;

  const phoneNumbers = useMemo(
    () => phones.map((num, i) => <PhoneNumber number={num} key={i} className={styles.phoneNum} />),
    [phones]
  );

  return (
    <div>
      {phoneNumbers}
      {hasHint && <span className={styles.hint}>{phoneHint}</span>}
    </div>
  );
};

export default Phone;
