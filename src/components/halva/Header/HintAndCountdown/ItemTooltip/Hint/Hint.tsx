import type { ReactNode } from "react";

import { CrossIcon, ExclamCircle } from "@src/components/Icons";

import styles from "./Hint.module.scss";

const HINT_TEXT =
  "Оформите карту «Халва» сейчас и получите подписку «Халва.Десятка» в подарок. Раскройте все возможности Халвы по максимуму!";

type HintProps = {
  hintText: ReactNode;
  onCloseTooltip: () => void;
};

const Hint = ({ hintText = HINT_TEXT, onCloseTooltip }: HintProps) => {
  return (
    <div className={styles.hintContainer}>
      <ExclamCircle className={styles.hintIcon} onClick={onCloseTooltip} aria-hidden />
      <div className={styles.hintText}>{hintText}</div>
      <CrossIcon alt="close" className={styles.closeIcon} onClick={onCloseTooltip} aria-hidden />
    </div>
  );
};

export default Hint;
