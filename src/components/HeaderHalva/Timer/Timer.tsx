import { styled } from "@mui/material";
import { Countdown } from "./CountDown";
import { GiftIcon } from "../../Icons";

type TimerProps = {
  countDownTime?: number;
};

const TimerContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  columnGap: 4,
}));

const Timer = ({ countDownTime }: TimerProps) => {
  return (
    <TimerContainer>
      <GiftIcon width={24} height={24} />
      <Countdown countDownTime={countDownTime} />
    </TimerContainer>
  );
};

export default Timer;
