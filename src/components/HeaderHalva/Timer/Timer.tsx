import { Countdown } from "./CountDown";
import { GiftIcon } from "../../Icons";

import styles from "./Timer.module.scss";

type TimerProps = {
  countDownTime?: number;
};

const Timer = ({ countDownTime }: TimerProps) => {
  return (
    <div className={styles.timer}>
      <GiftIcon width={24} height={24} />
      <Countdown countDownTime={countDownTime} />
    </div>
  );
};

export default Timer;
