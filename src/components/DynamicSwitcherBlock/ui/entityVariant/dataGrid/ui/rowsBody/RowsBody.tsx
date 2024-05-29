import clsx from "clsx";
import type { TColumnsCount, TTableHead, TTableRow } from "../../../../../types";
import { transformArrayToSubgroups } from "../../helper";
import styles from "./rowsBody.module.scss";

interface IRowsBodyProps {
  rowsHead?: TTableHead[];
  rowsBody: TTableRow[];
  columnsCount: TColumnsCount;
}

export const RowsBody = ({ rowsHead, rowsBody, columnsCount }: IRowsBodyProps) => {
  const formattedRows = transformArrayToSubgroups<TTableRow>(columnsCount, rowsBody);

  return (
    <div className={clsx(styles.rowsBody)}>
      {formattedRows?.map((subgroup, index) => (
        <div
          key={index}
          className={clsx(styles.row, styles[`row_${columnsCount}_columns`], {
            [styles.noHead]: rowsHead && rowsHead?.length === 0,
          })}
        >
          {subgroup?.map(({ text }) => (
            <div className={styles.ceil}>{text}</div>
          ))}
        </div>
      ))}
    </div>
  );
};
