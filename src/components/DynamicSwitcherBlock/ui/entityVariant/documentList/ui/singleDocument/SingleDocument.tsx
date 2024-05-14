import { getIcon } from "../../../../../helper";
import type { ISingleDocument, TDocsIconsVariants } from "../../../../../types";
import styles from "./singleDocument.module.scss";

interface ISingleDocumentProps extends ISingleDocument {
  iconType: TDocsIconsVariants;
}

export const SingleDocument = ({ url, iconType, label, size }: ISingleDocumentProps) => (
  <div className={styles.document}>
    <a href={url} target="_blank" rel="noreferrer" className={styles.document}>
      <span className={styles.documentIcon}>{getIcon(iconType)}</span>
      <div className={styles.documentBlock}>
        <h6 className={styles.documentTitle}>{label}</h6>
        <div className={styles.documentSize}>{size} КБ</div>
      </div>
    </a>
  </div>
);
