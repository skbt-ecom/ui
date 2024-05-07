import { Wrapper } from "../Wrapper";
import { items } from "./helper";

import type { Variant } from "./types";
import type { RejectOrErrorItems } from "../types";

import styles from "./RejectOrError.module.scss";

type RejectOrErrorProps = {
  variant: Variant;
} & RejectOrErrorItems;

const RejectOrError = ({ variant, ...props }: RejectOrErrorProps) => {
  const { defaultIcon, defaultTitle, defaultSubTitle } = items[variant];
  const { Icon = defaultIcon, title = defaultTitle, subTitle = defaultSubTitle } = props;

  return (
    <Wrapper className={styles.wrapper}>
      <div className={styles.message}>
        <Icon width={56} height={56} className={styles.icon} />
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
    </Wrapper>
  );
};

export default RejectOrError;
