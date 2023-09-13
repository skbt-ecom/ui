import { GiftIcon } from "@src/components/Icons";
import Countdown from "./Countdown/Countdown";

import styles from "./Timer.module.scss";

type TimerProps = {
  countdownTime?: number;
};

const Timer = ({ countdownTime }: TimerProps) => {
  return (
    <div className={styles.container}>
      <GiftIcon width={24} height={24} />
      <Countdown countdownTime={countdownTime} />
    </div>
  );
};

export default Timer;
