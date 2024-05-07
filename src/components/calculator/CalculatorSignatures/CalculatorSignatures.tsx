import clsx from "clsx";
import styles from "./calculatorSignatures.module.scss";
import { displayNumber } from "./helpers";

interface ICalculatorSignatures {
  min: number;
  max: number;
  signaturBlockClasses?: string;
}

const CalculatorSignatures = ({ min, max, signaturBlockClasses }: ICalculatorSignatures) => (
  <div className={clsx(styles.signaturBlock, signaturBlockClasses)}>
    <div>{displayNumber(min)}</div>
    <div>{displayNumber(max)}</div>
  </div>
);

export { CalculatorSignatures };
