import clsx from "clsx";
import type { ITableDetails, TTableRow } from "../../../types";
import { Accordion } from "../../accordion";
import { transformArrayToSubgroups } from "./helper";
import styles from "./dataGrid.module.scss";

export const DataGrid = ({
  rowsHead,
  description,
  rowsBody = [],
  columnsCount,
  config,
}: ITableDetails) => {
  const formattedRows = transformArrayToSubgroups<TTableRow>(columnsCount, rowsBody);

  const dataGridElement = (
    <div className={styles.wrapper}>
      <div className={styles.rowsWrapper}>
        <div className={clsx(styles.rowsHead, styles[`grid${columnsCount}`])}>
          {rowsHead?.map(({ head }) => (
            <div className={clsx(styles.ceil, styles.headCeil)}>{head}</div>
          ))}
        </div>
        <div className={styles.rowsBody}>
          {formattedRows?.map((subgroup, index) => (
            <div key={index} className={clsx(styles.row, styles[`grid${columnsCount}`])}>
              {subgroup?.map(({ text }) => (
                <div className={styles.ceil}>{text}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );

  return (
    <>
      {config && config?.isAccordion && config?.accordionTitle ? (
        <Accordion title={config?.accordionTitle} collapsedContent={dataGridElement} />
      ) : (
        dataGridElement
      )}
    </>
  );
};
