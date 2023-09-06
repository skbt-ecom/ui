import { styled } from "@mui/material";
import type { ReactNode } from "react";

import hintIcon from "../../../../core/assets/icons/exclam-circle.svg";
import crossIcon from "../../../../core/assets/icons/cross.svg";

import styles from "./Hint.module.scss";

type HintProps = {
  hintText: ReactNode;
  onCloseTooltip: () => void;
};

const HINT_TEXT =
  "Оформите карту «Халва» сейчас и получите подписку «Халва.Десятка» в подарок. Раскройте все возможности Халвы по максимуму!";

const HintContainer = styled("div")(({ theme }) => ({
  // color: "#000",
  // position: "absolute",
  // pointerEvents: "auto",
  // padding: "12px 16px",
  // backgroundColor: "#EDF6FE",
  // boxSizing: "border-box",
  // boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.12)",
  // borderRadius: 12,
  // transition: "0.5s all",
  // marginTop: 16,

  display: "flex",
  justifyContent: "space-between",
  width: "100%",
}));

const Hint = ({ hintText = HINT_TEXT, onCloseTooltip }: HintProps) => {
  return (
    <HintContainer className={styles.hintContainer}>
      <img src={hintIcon} className={styles.hintIcon} alt="exclamation mark" />
      <div className={styles.hintModal}>{hintText}</div>
      {/* <CrossIcon
        width={11}
        height={11}
        alt="close"
        className={styles.close}
        onClick={onCloseTooltip}
        aria-hidden
      /> */}
      <img
        src={crossIcon}
        className={styles.close}
        alt="cross"
        onClick={onCloseTooltip}
        aria-hidden
      />
    </HintContainer>
  );
};

export default Hint;
