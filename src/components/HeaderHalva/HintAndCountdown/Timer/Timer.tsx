import { styled } from "@mui/material";

import { GiftIcon } from "@src/components/Icons";
import Countdown from "./Countdown/Countdown";

type TimerProps = {
  countdownTime?: number;
};

const TimerContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  columnGap: 4,
}));

const Timer = ({ countdownTime }: TimerProps) => {
  return (
    <TimerContainer>
      <GiftIcon width={24} height={24} />
      <Countdown countdownTime={countdownTime} />
    </TimerContainer>
  );
};

export default Timer;
