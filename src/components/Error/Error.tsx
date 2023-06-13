import { Button } from "../Button";
import { Wrapper } from "../Wrapper";

import type { Variant } from "./types";
import { items } from "./helper";

import styles from "./Error.module.scss";

type ErrorProps = {
  variant: Variant;
};

const Error = ({ variant }: ErrorProps) => {
  const { Icon, title, subTitle, btnText } = items[variant];

  return (
    <Wrapper className={styles.wrapper}>
      <Icon width={56} height={56} className={styles.icon} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subTitle}>{subTitle}</p>
      <Button className={styles.btn} label={btnText} variant="contained" />
    </Wrapper>
  );
};

export default Error;
