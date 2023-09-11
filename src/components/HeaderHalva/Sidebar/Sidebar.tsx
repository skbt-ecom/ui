import { useCallback, useEffect } from "react";
import clsx from "clsx";
import type { FC, HTMLProps } from "react";

import { MainContainer } from "@src/components/base";

import { HalvaIcon, CrossIcon } from "../../Icons";
import NavLinks from "../NavLinks/NavLinks";
import Btn from "./Btn/Btn";
import type { Link } from "../types";

import styles from "./Sidebar.module.scss";

export type SidebarProps = {
  isActive?: boolean;
  onClickBtn?: () => void;
  onLogoClick?: () => void;
  onCloseSidebar?: () => void;
  buttonText?: string;
  Logo?: FC<Partial<HTMLProps<SVGElement>>>;
  links?: Link[];
  orderNum?: string;
};

const Sidebar = ({
  isActive,
  onClickBtn,
  onLogoClick,
  onCloseSidebar,
  buttonText = "Оформить карту",
  Logo = HalvaIcon,
  links,
  orderNum,
}: SidebarProps) => {
  const mods = {
    sidebar: { [styles.active]: isActive },
  };

  useEffect(() => {
    const body = globalThis?.document?.body;

    if (body) {
      body.classList.toggle(styles.noScroll, isActive);
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [isActive]);

  const onClick = useCallback(() => {
    if (onCloseSidebar) {
      onCloseSidebar();
    }
    if (onClickBtn) {
      onClickBtn();
    }
  }, [onCloseSidebar, onClickBtn]);

  return (
    <div className={clsx(styles.container, styles.animated, mods.sidebar)} data-exclude={orderNum}>
      <div className={styles.wrapper}>
        <MainContainer>
          <header className={styles.header}>
            <Logo onClick={onLogoClick} width={72} />
            <CrossIcon className={styles.cross} onClick={onCloseSidebar} width={16} height={16} />
          </header>
        </MainContainer>
        <NavLinks links={links} variant="vertical" />
        <div className={styles.btn}>
          <MainContainer>
            <Btn handleClick={onClick}>{buttonText}</Btn>
          </MainContainer>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
