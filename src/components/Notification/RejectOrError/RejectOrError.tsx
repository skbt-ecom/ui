import { Button } from "../../base/Button";
import { Wrapper } from "../Wrapper";

import type { Variant } from "./types";
import { items } from "./helper";

import styles from "./RejectOrError.module.scss";

type ErrorProps = {
  variant: Variant;
  onClick: () => void;
};

const RejectOrError = ({ variant, onClick }: ErrorProps) => {
  const { Icon, title, subTitle, btnText } = items[variant];

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
