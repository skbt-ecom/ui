import { Phone } from "./Phone";

import styles from "./PhoneContainer.module.scss";

type PhoneContainerProps = {
  phone?: string;
  phoneHint?: string;
  phones?: string[];
};

const PhoneContainer = ({
  phone = "8 800 100-10-20",
  phoneHint = "Для звонков по России (бесплатно)",
  phones,
}: PhoneContainerProps) => {
  const phonesArr = phones ?? [phone];
  // const isSinglePhone = phonesArr.length === 1;
  // const phoneWithHintProps = {
  //   phone: phonesArr[0],
  //   phoneHint,
  //   styles: { phoneHint: styles.phoneHint, phoneNum: styles.phoneNum },
  // };

  return (
    <div className={styles.phoneContainer}>
      {/* {isSinglePhone ? (
        <PhoneWithHint {...phoneWithHintProps} />
      ) : (
        phonesArr.map((phone1, i) => (
          <Phone
            key={i}
            number={phone1}
            styles={{
              phoneNum: styles.phoneMultiple,
            }}
          />
        ))
      )} */}
      {phonesArr.map((phoneNum, i) => (
        <Phone key={i} number={phoneNum} />
      ))}
    </div>
  );
};

export default PhoneContainer;
