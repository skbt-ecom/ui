import { styled } from "@mui/material";

import type { ReactNode } from "react";

import { CrossIcon, ExclamCircle } from "@src/components/Icons";

import styles from "./Hint.module.scss";

type HintProps = {
  hintText: ReactNode;
  onCloseTooltip: () => void;
};

const HINT_TEXT =
  "Оформите карту «Халва» сейчас и получите подписку «Халва.Десятка» в подарок. Раскройте все возможности Халвы по максимуму!";

const HintContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
}));

const Hint = ({ hintText = HINT_TEXT, onCloseTooltip }: HintProps) => {
  return (
    <HintContainer className={styles.hintContainer}>
      <ExclamCircle
        className={styles.hintIcon}
        width={11}
        height={11}
        onClick={onCloseTooltip}
        aria-hidden
      />
      <div className={styles.hintModal}>{hintText}</div>
      <CrossIcon
        width={11}
        height={11}
        alt="close"
        className={styles.close}
        onClick={onCloseTooltip}
        aria-hidden
      />
    </HintContainer>
  );
};

export default Hint;
