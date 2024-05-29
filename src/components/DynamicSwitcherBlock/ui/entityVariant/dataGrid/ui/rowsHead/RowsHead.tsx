import clsx from "clsx";
import type { TColumnsCount, TTableHead } from "../../../../../types";
import styles from "./rowsHead.module.scss";

interface IRowsHeadProps {
  rowsHead: TTableHead[];
  columnsCount: TColumnsCount;
}

export const RowsHead = ({ rowsHead, columnsCount }: IRowsHeadProps) => (
  <div className={clsx(styles.rowsHead, styles[`rowsHead_${columnsCount}_columns`])}>
    {rowsHead?.map(({ head }) => (
      <div className={styles.headCeil}>{head}</div>
    ))}
  </div>
);
