import type { ReactNode } from "react";
import { useState } from "react";
import { clsx } from "clsx";
import styles from "./accordion.module.scss";
import { SvgArrow } from "../../icons";

interface IAccordionsProps {
  title: string;
  collapsedContent: ReactNode;
}

export const Accordion = ({ title, collapsedContent }: IAccordionsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.accordion}>
      <div
        tabIndex={0}
        role="button"
        onClick={toggleAccordion}
        onKeyDown={toggleAccordion}
        className={styles.head}
      >
        <h3 className={styles.title}>{title}</h3>
        <div className={clsx(styles.icon, { [styles.isOpen]: isOpen })}>
          <SvgArrow />
        </div>
      </div>
      {isOpen && <div className={styles.collapsedContent}>{collapsedContent}</div>}
    </div>
  );
};
