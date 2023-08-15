import { PhoneNumber } from "./PhoneNumber";
import { Hint } from "./Hint";

import styles from "./Phone.module.scss";

export type PhoneProps = {
  phoneHint?: string;
  phoneNumber?: string;
};

const Phone = ({
  phoneHint = "Для звонков по России (бесплатно)",
  phoneNumber = "8 800 100-10-20",
}: PhoneProps) => {
  return (
    <div className={styles.container}>
      <PhoneNumber value={phoneNumber} />
      <Hint text={phoneHint} />
    </div>
  );
};

export default Phone;
