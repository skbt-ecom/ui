import { useEffect, useState } from "react";

import styles from "./Countdown.module.scss";

type CountdownProps = {
  countDownTime?: number;
};

const Countdown = ({ countDownTime = 43200000 }: CountdownProps) => {
  const [count, setCount] = useState(countDownTime);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedCount = localStorage.getItem("countDownDate");

    setCount(Number(savedCount) || countDownTime);
    setLoading(false);
  }, [countDownTime]);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("countDownDate", `${count}`);
    }
  }, [count, loading]);

  useEffect(() => {
    let secondsLeft: NodeJS.Timer;

    if (count > 0 && !loading) {
      secondsLeft = setInterval(() => {
        setCount((c) => c - 1000);
      }, 1000);
    }

    return () => {
      clearInterval(secondsLeft);
    };
  }, [count, loading]);

  const msToTime = (duration: number) => {
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const seconds = Math.floor((duration / 1000) % 60);

    return {
      h: hours,
      m: minutes,
      s: seconds,
    };
  };

  const timeLeft = msToTime(count);

  const [hour, setHour] = useState(timeLeft.h);
  const [minute, setMinute] = useState(timeLeft.m);
  const [second, setSecond] = useState(timeLeft.s);

  useEffect(() => {
    setHour(timeLeft.h);
    setMinute(timeLeft.m);
    setSecond(timeLeft.s);
  }, [timeLeft]);

  let displayTime = "";
  if (hour > 0) {
    displayTime = `${hour <= 9 ? `0${hour}` : hour}:${minute <= 9 ? `0${minute}` : minute}:${
      second <= 9 ? `0${second}` : second
    }`;
  } else {
    displayTime = `${minute <= 9 ? `0${minute}` : minute}:${second <= 9 ? `0${second}` : second}`;
  }

  let loadingDisplayTime = "";
  if (hour > 0) {
    loadingDisplayTime = "--:--:--";
  } else {
    loadingDisplayTime = "--:--";
  }

  return (
    <span id="countdownBlock" className={styles.countdown}>
      {loading ? loadingDisplayTime : displayTime}
    </span>
  );
};

export default Countdown;
