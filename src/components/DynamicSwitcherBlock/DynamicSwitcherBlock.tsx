import { type ReactElement, useState } from "react";
import type { ISwitcherBlockSchema } from "./types";
import { SwitcherEntity, SwitcherTab } from "./ui";
import styles from "./dynamicSwitcherBlock.module.scss";

interface IDynamicSwitcherBlockProps {
  headTitle?: ReactElement | string;
  data: ISwitcherBlockSchema;
}

export const DynamicSwitcherBlock = ({
  headTitle = "Полезная информация",
  data,
}: IDynamicSwitcherBlockProps) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.headTitle}>{headTitle}</h2>

        <div className={styles.tabsList}>
          {data?.tabs?.map((tab, index) => (
            <SwitcherTab
              key={tab.tabName}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              index={index}
              {...tab}
            />
          ))}
        </div>

        <div className={styles.contents}>
          {data?.tabs[activeTab]?.contents?.map(({ entity }, index) => (
            <SwitcherEntity key={index} entity={entity} />
          ))}
        </div>
      </div>
    </section>
  );
};
