import clsx from "clsx";
import styles from "./HTML.module.scss";
import type { IHTMLDetails } from "../../../types";
import { Accordion } from "../../accordion";

export const HTML = ({ html, config }: IHTMLDetails) => {
  if (!html) return null;
  const filteredHTML = html?.replace(/<p><br><\/p>/g, "");

  const HTMLElement = (
    <div className={clsx(styles.htmlWrapper, styles.htmlWrapperOnAccordion)}>
      <div dangerouslySetInnerHTML={{ __html: filteredHTML }} />
    </div>
  );
  return (
    <>
      {config && config?.isAccordion ? (
        <Accordion title={config?.accordionTitle} collapsedContent={HTMLElement} />
      ) : (
        HTMLElement
      )}
    </>
  );
};
