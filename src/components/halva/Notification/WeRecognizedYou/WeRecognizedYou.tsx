import img from "@src/core/assets/img/halvaCard.png";

import { UserCircleIcon } from "@src/components/Icons";
import { Wrapper } from "../Wrapper";
import { defaultSubtitle, defaultTitle, defaultTextAboveBtn } from "./helper";

import type { WeRecognizedYouItems } from "../types";

import styles from "./WeRecognizedYou.module.scss";

const WeRecognizedYou = ({
  Icon = UserCircleIcon,
  title = defaultTitle,
  subTitle = defaultSubtitle,
  textAboveBtn = defaultTextAboveBtn,
}: WeRecognizedYouItems) => {
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
      </div>
    </div>
  );
};

export default WeRecognizedYou;
