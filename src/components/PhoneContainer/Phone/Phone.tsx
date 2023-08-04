import styles from "./Phone.module.scss";

type PhoneProps = {
  number?: string;
};

const Phone = ({ number }: PhoneProps) => (
  <a rel="nofollow" href={`tel:${number}`} className={styles.phoneNum}>
    {number}
  </a>
);

export default Phone;
