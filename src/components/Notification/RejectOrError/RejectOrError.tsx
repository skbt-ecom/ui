import { Button } from "../../base/Button";
import { Wrapper } from "../Wrapper";

import { items } from "./helper";

import type { Variant } from "./types";
import type { RejectOrErrorItems } from "../types";

import styles from "./RejectOrError.module.scss";

type RejectOrErrorProps = {
  variant: Variant;
  onClick: () => void;
} & RejectOrErrorItems;

const RejectOrError = ({ variant, onClick, ...props }: RejectOrErrorProps) => {
  const { defaultIcon, defaultTitle, defaultSubTitle, defaultBtnText } = items[variant];
  const {
    Icon = defaultIcon,
    title = defaultTitle,
    subTitle = defaultSubTitle,
    btnText = defaultBtnText,
  } = props;

  return (
    <Wrapper className={styles.wrapper}>
      <div className={styles.message}>
        <Icon width={56} height={56} className={styles.icon} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
      <Button className={styles.btn} variant="contained" handleClick={onClick}>
        {btnText}
      </Button>
    </Wrapper>
  );
};

export default RejectOrError;
