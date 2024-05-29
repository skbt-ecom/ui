import clsx from "clsx";
import type { ITableDetails } from "../../../types";
import { Accordion } from "../../accordion";
import { RowsBody, RowsHead } from "./ui";
import styles from "./dataGrid.module.scss";

export const DataGrid = ({
  rowsHead,
  description,
  rowsBody = [],
  columnsCount,
  config,
  title,
}: ITableDetails) => {
  const dataGridElement = (
    <div className={clsx(styles.wrapper, styles[`wrapper_${columnsCount}_columns`])}>
      {title && <h4 className={styles.title}>{title}</h4>}
      <div className={clsx(styles.rowsWrapper, styles[`rowsWrapper_${columnsCount}_columns`])}>
        {rowsHead && rowsHead.length > 0 && (
          <RowsHead rowsHead={rowsHead} columnsCount={columnsCount} />
        )}
        <RowsBody rowsHead={rowsHead} columnsCount={columnsCount} rowsBody={rowsBody} />
      </div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );

  return (
    <>
      {config && config?.isAccordion ? (
        <Accordion title={config?.accordionTitle} collapsedContent={dataGridElement} />
      ) : (
        dataGridElement
      )}
    </>
  );
};
