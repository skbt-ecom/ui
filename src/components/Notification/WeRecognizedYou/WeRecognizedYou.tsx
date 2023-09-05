import img from "../../../core/assets/img/halvaCard.png";

import { Button } from "../../base/Button";
import { UserCircleIcon } from "../../Icons";
import { Wrapper } from "../Wrapper";
import { defaultSubtitle, defaultTitle, defaultTextAboveBtn, defaultBtnText } from "./helper";

import type { WeRecognizedYouItems } from "../types";

import styles from "./WeRecognizedYou.module.scss";

type WeRecognizedYouProps = {
  onClick: () => void;
} & WeRecognizedYouItems;

const WeRecognizedYou = ({
  onClick,
  Icon = UserCircleIcon,
  title = defaultTitle,
  subTitle = defaultSubtitle,
  btnText = defaultBtnText,
  textAboveBtn = defaultTextAboveBtn,
}: WeRecognizedYouProps) => {
  return (
    <div className={styles.container}>
      <Wrapper className={styles.wrapper}>
        <Icon width={56} height={56} className={styles.icon} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subTitle}>{subTitle}</p>
      </Wrapper>
      <div className={styles.btnContainer}>
        <p className={styles.text}>{textAboveBtn}</p>
        <img className={styles.img} src={img} alt="halva card" width={202.55} height={185} />
        <Button className={styles.btn} variant="contained" handleClick={onClick}>
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default WeRecognizedYou;
