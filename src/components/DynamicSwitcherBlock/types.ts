export type TDocsIconsVariants = "outlineDoc" | "filledDoc";

export type TSwitcherBlockId = string;
export type TColumnsCount = 2 | 3;

export type TEntityConfig = {
  isAccordion: boolean;
  accordionTitle: string;
};

export interface ISingleDocument {
  url: string;
  size: number;
  label: string;
}

export type TTableRow = {
  text: string;
};

export type TTableHead = {
  head: string;
};

export enum EnumEntityVariant {
  HTML = "HTML",
  TABLE = "TABLE",
  DOCUMENTS = "DOCUMENTS",
}

export interface ITableDetails {
  description?: string;
  title?: string;
  columnsCount: TColumnsCount;
  rowsHead?: TTableHead[];
  rowsBody: TTableRow[];
  config?: TEntityConfig;
}

export interface IDocumentDetails {
  iconType: TDocsIconsVariants;
  title?: string;
  description?: string;
  docs: ISingleDocument[];
  config?: TEntityConfig;
}

export interface IHTMLDetails {
  html: string;
  config?: TEntityConfig;
}

type TEntityVariantDetails = IHTMLDetails | ITableDetails | IDocumentDetails;

export interface IEntity {
  variant: EnumEntityVariant;
  details: TEntityVariantDetails[];
}

interface ITabContent {
  entity: IEntity;
}

export interface ISingleTab {
  tabName: string;
  tabId: string;
  contents: ITabContent[];
}

export interface ISwitcherBlockSchema {
  sbName: string;
  publicSbName: string;
  _id: string;
  tabs: ISingleTab[];
}

export interface ISwitchersBlocksData {
  totalCount: number | null;
  items: ISwitcherBlockSchema[];
}
