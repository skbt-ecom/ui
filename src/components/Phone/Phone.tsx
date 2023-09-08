import clsx from "clsx";
import PhoneNumber from "./PhoneNumber/PhoneNumber";
import Hint from "./Hint/Hint";

import styles from "./Phone.module.scss";

export type PhoneProps = {
  phoneHint?: string;
  phoneNumber?: string;
  className?: string;
};

const Phone = ({
  phoneHint = "Звонок по России (бесплатно)",
  phoneNumber = "8 800 100-10-20",
  className,
}: PhoneProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <PhoneNumber value={phoneNumber} />
      <Hint text={phoneHint} />
    </div>
  );
};

export default Phone;
