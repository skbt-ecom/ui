import { Button } from "../Button";
import { Wrapper } from "../Wrapper";
import { items } from "./helper";
import type { Variant } from "./types";

import styles from "./Reject.module.scss";

type RejectProps = {
  variant: Variant;
};

const Reject = ({ variant }: RejectProps) => {
  const { Icon, title, subTitle, btnText } = items[variant];

  return (
    <Wrapper className={styles.wrapper}>
      <Icon width={56} height={56} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subTitle}>{subTitle}</p>
      <div className={styles.btn}>
        <Button label={btnText} variant="contained" />
      </div>
    </Wrapper>
  );
};

export default Reject;
