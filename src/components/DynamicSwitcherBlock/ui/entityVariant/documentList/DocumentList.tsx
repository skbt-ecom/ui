import type { IDocumentDetails } from "../../../types";
import { Accordion } from "../../accordion";
import { SingleDocument } from "./ui/singleDocument";
import styles from "./documentList.module.scss";

export const DocumentList = ({
  docs = [],
  iconType,
  description,
  title,
  config,
}: IDocumentDetails) => {
  const documentListElement = (
    <div className={styles.wrapper}>
      <div className={styles.textBlock}>
        {title && <h4 className={styles.title}>{title}</h4>}
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <div className={styles.docsList}>
        {docs?.map((document) => (
          <SingleDocument iconType={iconType} key={document.url} {...document} />
        ))}
      </div>
    </div>
  );

  return (
    <>
      {config && config?.isAccordion && config?.accordionTitle ? (
        <Accordion title={config?.accordionTitle} collapsedContent={documentListElement} />
      ) : (
        documentListElement
      )}
    </>
  );
};
