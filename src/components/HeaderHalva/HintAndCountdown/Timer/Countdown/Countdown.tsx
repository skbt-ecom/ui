import { useEffect, useState } from "react";
import { styled } from "@mui/material";

type CountdownProps = {
  countdownTime?: number;
};

const CountdownContainer = styled("span")(() => ({
  fontSize: 16,
  fontWeight: 700,
  letterSpacing: 0.3,
}));

const Countdown = ({ countdownTime = 43200000 }: CountdownProps) => {
  const [count, setCount] = useState(countdownTime);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedCount = localStorage.getItem("countdownDate");

    setCount(Number(savedCount) || countdownTime);
    setLoading(false);
  }, [countdownTime]);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("countdownDate", `${count}`);
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
    <CountdownContainer id="countdownBlock">
      {loading ? loadingDisplayTime : displayTime}
    </CountdownContainer>
  );
};

export default Countdown;
