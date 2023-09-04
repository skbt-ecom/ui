import img from "../../../core/assets/img/halvaCard.png";

import { Button } from "../../base/Button";
import { UserCircleIcon } from "../../Icons";
import { Wrapper } from "../Wrapper";
import { btnText, subTitle, text, title } from "./helper";

import styles from "./WeRecognizedYou.module.scss";

type WeRecognizedYouProps = {
  onClick: () => void;
};

const WeRecognizedYou = ({ onClick }: WeRecognizedYouProps) => {
  return (
    <div className={styles.container}>
      <Wrapper className={styles.wrapper}>
        <UserCircleIcon width={56} height={56} className={styles.icon} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subTitle}>{subTitle}</p>
      </Wrapper>
      <div className={styles.btnContainer}>
        <p className={styles.text}>{text}</p>
        <img className={styles.img} src={img} alt="halva card" width={202.55} height={185} />
        <Button className={styles.btn} variant="contained" handleClick={onClick}>
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default WeRecognizedYou;
