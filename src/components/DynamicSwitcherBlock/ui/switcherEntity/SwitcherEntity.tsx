import { memo, useCallback } from "react";
import { unusedCase } from "../../../../utils/unusedCase";
import {
  EnumEntityVariant,
  type IDocumentDetails,
  type IEntity,
  type IHTMLDetails,
  type ITableDetails,
} from "../../types";
import { DataGrid, DocumentList, HTML } from "../entityVariant";
import styles from "./switcherEntity.module.scss";

interface ISwitcherEntityProps {
  entity: IEntity;
}

export const SwitcherEntity = memo(({ entity }: ISwitcherEntityProps) => {
  const generateEntity = useCallback(() => {
    switch (entity.variant) {
      case EnumEntityVariant.HTML:
        return (
          <>
            {entity.details?.map((details) => (
              <HTML {...(details as IHTMLDetails)} />
            ))}
          </>
        );

      case EnumEntityVariant.TABLE:
        return (
          <>
            {entity.details?.map((details) => (
              <DataGrid {...(details as ITableDetails)} />
            ))}
          </>
        );

      case EnumEntityVariant.DOCUMENTS:
        return (
          <>
            {entity.details?.map((details) => (
              <DocumentList {...(details as IDocumentDetails)} />
            ))}
          </>
        );

      default:
        return unusedCase(entity.variant);
    }
  }, [entity.details, entity.variant]);

  return <div className={styles.entity}>{generateEntity()}</div>;
});
