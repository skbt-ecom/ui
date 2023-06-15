import { Error } from "../Error";
import { Success } from "../Success";

type NotificationProps = {
  variant: "reject" | "techError" | "success";
};

const Notification = ({ variant }: NotificationProps) => {
  switch (variant) {
    case "reject":
    case "techError":
      return <Error variant={variant} />;
    default:
      return <Success />;
  }
};

export default Notification;
