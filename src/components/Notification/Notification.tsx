import { RejectOrError } from "./RejectOrError";
import { WeRecognizedYou } from "./WeRecognizedYou";

type NotificationProps = {
  variant?: "reject" | "techError" | "weRecognizedYou";
};

const Notification = ({ variant }: NotificationProps) => {
  switch (variant) {
    case "reject":
    case "techError":
      return <RejectOrError variant={variant} />;
    case "weRecognizedYou":
      return <WeRecognizedYou />;
    default:
      return <RejectOrError variant="reject" />;
  }
};

export default Notification;
