import type { ReactNode } from "react";

import { HintIcon, CrossIcon } from "../../Icons";

import styles from "./Hint.module.scss";

type HintProps = {
  hintText: ReactNode;
  onCloseTooltip: () => void;
};

const Hint = ({
  hintText = "Оформите карту «Халва» сейчас и получите подписку «Халва.Десятка» в подарок. Раскройте все возможности Халвы по максимуму!",
  onCloseTooltip,
}: HintProps) => {
  return (
    <div className={styles.hintContainer}>
      <HintIcon alt="hint" className={styles.hintIcon} aria-hidden="true" />
      <div className={styles.hintModal}>{hintText}</div>
      <CrossIcon alt="close" className={styles.close} onClick={onCloseTooltip} aria-hidden="true" />
    </div>
  );
};

export default Hint;
