import type { FC, HTMLProps, ReactNode } from "react";

import { MainContainer } from "@src/components/base";

import { RejectOrError } from "./RejectOrError";
import { WeRecognizedYou } from "./WeRecognizedYou";

type NotificationProps = {
  variant?: "reject" | "techError" | "weRecognizedYou";
  Icon?: FC<Partial<HTMLProps<SVGElement>>>;
  title?: ReactNode;
  subTitle?: ReactNode;
  btnText?: string;
  textAboveBtn?: ReactNode;
};

const Notification = ({
  variant,
  Icon,
  title,
  subTitle,
  btnText,
  textAboveBtn,
}: NotificationProps) => {
  let Message: JSX.Element;

  switch (variant) {
    case "reject":
    case "techError":
      Message = (
        <RejectOrError
          variant={variant}
          Icon={Icon}
          title={title}
          subTitle={subTitle}
          btnText={btnText}
        />
      );
      break;
    case "weRecognizedYou":
      Message = (
        <WeRecognizedYou
          Icon={Icon}
          title={title}
          subTitle={subTitle}
          btnText={btnText}
          textAboveBtn={textAboveBtn}
        />
      );
      break;
    default:
      Message = (
        <RejectOrError
          variant="reject"
          Icon={Icon}
          title={title}
          subTitle={subTitle}
          btnText={btnText}
        />
      );
  }

  return <MainContainer>{Message}</MainContainer>;
};

export default Notification;
