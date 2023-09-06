import type { ReactNode } from "react";

import { ItemTooltip } from "../ItemTooltip";
import { Timer } from "../Timer";

import styles from "./HintAndCountdown.module.scss";

const HINT_TITLE = (
  <>
    Халва.Десятка <br /> в подарок
  </>
);

const HINT_TEXT =
  "Оформите карту «Халва» сейчас и получите подписку «Халва.Десятка» в подарок. Раскройте все возможности Халвы по максимуму!";

export type HintAndCountdownProps = {
  countdownTime?: number;
  hintTitle?: ReactNode;
  hintText?: string;
  onTooltipOpen: () => void;
  onTooltipClose: () => void;
};

const HintAndCountdown = ({
  hintTitle = HINT_TITLE,
  hintText = HINT_TEXT,
  countdownTime,
  onTooltipOpen,
  onTooltipClose,
}: HintAndCountdownProps) => (
  <div className={styles.container}>
    <ItemTooltip hintText={hintText} onTooltipOpen={onTooltipOpen} onTooltipClose={onTooltipClose}>
      <span className={styles.title}>{hintTitle}</span>
    </ItemTooltip>
    <Timer countdownTime={countdownTime} />
  </div>
);

export default HintAndCountdown;
