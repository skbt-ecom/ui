import { MainContainer } from "../base";

import { RejectOrError } from "./RejectOrError";
import { WeRecognizedYou } from "./WeRecognizedYou";

type NotificationProps = {
  variant?: "reject" | "techError" | "weRecognizedYou";
  onClick: () => void;
};

const Notification = ({ variant, onClick }: NotificationProps) => {
  let Message: JSX.Element;

  switch (variant) {
    case "reject":
    case "techError":
      Message = <RejectOrError variant={variant} onClick={onClick} />;
      break;
    case "weRecognizedYou":
      Message = <WeRecognizedYou onClick={onClick} />;
      break;
    default:
      Message = <RejectOrError variant="reject" onClick={onClick} />;
  }

  return <MainContainer>{Message}</MainContainer>;
};

export default Notification;
