import { memo, useCallback } from "react";
import styles from "./switcherEntity.module.scss";

import {
  EnumEntityVariant,
  type IEntity,
  type IHTMLDetails,
  type ITableDetails,
  type IDocumentDetails,
} from "../../types";

import { DataGrid, DocumentList, HTML } from "../entityVariant";
import { unusedCase } from "../../../../utils/unusedCase";

interface ISwitcherEntityProps {
  entity: IEntity;
}

export const SwitcherEntity = memo(({ entity }: ISwitcherEntityProps) => {
  const generateEntity = useCallback(() => {
    switch (entity.variant) {
      case EnumEntityVariant.HTML:
        return (
          <>
            {entity.details?.map((details, index) => (
              <HTML key={index} {...(details as IHTMLDetails)} />
            ))}
          </>
        );

      case EnumEntityVariant.TABLE:
        return (
          <>
            {entity.details?.map((details, index) => (
              <DataGrid key={index} {...(details as ITableDetails)} />
            ))}
          </>
        );

      case EnumEntityVariant.DOCUMENTS:
        return (
          <>
            {entity.details?.map((details, index) => (
              <DocumentList key={index} {...(details as IDocumentDetails)} />
            ))}
          </>
        );

      default: 
        return null
    }
  }, [entity.details, entity.variant]);

  return <div className={styles.entity}>{generateEntity()}</div>;
});
