/* eslint-disable react/no-danger */
import type { IHTMLDetails } from "../../../types";
import { Accordion } from "../../accordion";
import styles from "./HTML.module.scss";

export const HTML = ({ html, config }: IHTMLDetails) => {
  if (!html) return null;
  const filteredHTML = html?.replace(/<p><br><\/p>/g, "<br>");

  const HTMLElement = (
    <div className={styles.htmlWrapper}>
      <div dangerouslySetInnerHTML={{ __html: filteredHTML }} />
    </div>
  );

  return (
    <>
      {config && config?.isAccordion && config?.accordionTitle ? (
        <Accordion title={config?.accordionTitle} collapsedContent={HTMLElement} />
      ) : (
        HTMLElement
      )}
    </>
  );
};
