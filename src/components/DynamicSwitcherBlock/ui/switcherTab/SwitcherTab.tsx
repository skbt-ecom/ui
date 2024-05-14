import clsx from "clsx";
import styles from "./switcherTab.module.scss";

interface ISwitcherTabProps {
  activeTab: number;
  tabName: string;
  index: number;
  setActiveTab: (tabIndex: number) => void;
}

export const SwitcherTab = ({ setActiveTab, activeTab, tabName, index }: ISwitcherTabProps) => (
  <button
    onClick={() => setActiveTab(index)}
    className={clsx(styles.tab, {
      [styles.active]: activeTab === index,
    })}
    type="button"
  >
    {tabName}
  </button>
);
