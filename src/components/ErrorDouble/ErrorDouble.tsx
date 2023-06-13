import img from "../../core/assets/img/halvaCard.png";

import { Button } from "../Button";
import { UserCircleIcon } from "../Icons";
import { Wrapper } from "../Wrapper";

import styles from "./ErrorDouble.module.scss";

const title = <>Привет, мы вас узнали!</>;
const subTitle = (
  <>Решение по прошлой заявке еще активно. Возвращайтесь&nbsp;к&nbsp;нам&nbsp;позже.</>
);
const text = (
  <>
    А&nbsp;пока&nbsp;загляните&nbsp;в&nbsp;наш&nbsp;магазин&nbsp;—
    нам&nbsp;есть&nbsp;чем&nbsp;вас&nbsp;порадовать
  </>
);
const btnText = "Посмотреть товары";

const ErrorDouble = () => {
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
        <Button className={styles.btn} label={btnText} variant="contained" />
      </div>
    </div>
  );
};

export default ErrorDouble;
