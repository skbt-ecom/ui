import img from "../../core/assets/img/halvaCard.png";

import { Button } from "../Button";
import { UserCircleIcon } from "../Icons";
import { Wrapper } from "../Wrapper";

import styles from "./ErrorDouble.module.scss";

const ErrorDouble = () => {
  return (
    <div className={styles.container}>
      <Wrapper className={styles.wrapper}>
        <UserCircleIcon width={56} height={56} className={styles.icon} />
        <h2 className={styles.title}>Привет, мы вас узнали!</h2>
        <p className={styles.subTitle}>
          Решение по прошлой заявке еще активно. Возвращайтесь&nbsp;к&nbsp;нам&nbsp;позже.
        </p>
      </Wrapper>
      <div className={styles.btnContainer}>
        <p className={styles.text}>
          А&nbsp;пока&nbsp;загляните&nbsp;в&nbsp;наш&nbsp;магазин&nbsp;—
          нам&nbsp;есть&nbsp;чем&nbsp;вас&nbsp;порадовать
        </p>
        <img className={styles.img} src={img} alt="halva card" width={202.55} height={185} />
        <Button label="Посмотреть товары" variant="contained" />
      </div>
    </div>
  );
};

export default ErrorDouble;
