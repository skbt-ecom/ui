import type { ReactElement } from "react";
import { useState } from "react";
import { SwitcherTab, SwitcherEntity } from "./ui";
import type { ISwitcherBlockSchema } from "./types";
import styles from "./dynamicSwitcherBlock.module.scss";
import { ResponsiveContainer } from "../base/ResponsiveContainer";

interface IDynamicSwitcherBlockProps {
  headTitle?: ReactElement | string;
  data: ISwitcherBlockSchema;
}

export const DynamicSwitcherBlock = ({ headTitle, data }: IDynamicSwitcherBlockProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <section className={styles.section}>
      <ResponsiveContainer>
        <div className={styles.wrapper}>
          {headTitle && <h2 className={styles.headTitle}>{headTitle}</h2>}

          <div className={styles.tabsList}>
            {data?.tabs?.map((tab, index) => (
              <div>
                <SwitcherTab
                  key={tab.tabName}
                  setActiveTab={setActiveTab}
                  activeTab={activeTab}
                  index={index}
                  {...tab}
                />
              </div>
            ))}
          </div>

          <div className={styles.contents}>
            {data?.tabs[activeTab]?.contents?.map(({ entity }, index) => (
              <SwitcherEntity key={index} entity={entity} />
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  );
};
