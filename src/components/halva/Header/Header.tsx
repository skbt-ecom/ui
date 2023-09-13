import { useCallback, useState } from "react";
import clsx from "clsx";
import type { FC, HTMLProps, ReactNode } from "react";

import { BurgerIcon, HalvaIcon } from "@src/components/Icons";
import { Button, MainContainer } from "@src/components/base";
import { Phone } from "@src/components/halva/Header/Phone";
import { Portal } from "@src/components/Portal";
import type { PhoneProps } from "@src/components/halva/Header/Phone";

import Nav from "./NavLinks/NavLinks";
import Sidebar from "./Sidebar/Sidebar";
import HalvaLogo from "./HalvaLogo/HalvaLogo";
import { HintAndCountdown } from "./HintAndCountdown";
import type { SidebarProps } from "./Sidebar/Sidebar";
import type { Link } from "./types";

import styles from "./Header.module.scss";

type HeaderProps = {
  hintTitle?: ReactNode;
  hintText?: string;
  btnText?: string;
  countdownTime?: number;
  Logo?: FC<Partial<HTMLProps<SVGElement>>>;
  SecondLogo?: JSX.Element;
  PhoneProps?: PhoneProps;
  SidebarProps?: Pick<SidebarProps, "onClickBtn" | "onLogoClick">;
  links?: Link[];
  orderNum?: string;
  withBtn?: boolean;
  withHint?: boolean;
  withPhone?: boolean;
  withShadow?: boolean;
  withNav?: boolean;
  logoColor?: "red" | "dark";
};

const Header = ({
  hintTitle,
  hintText,
  btnText = "Оформить карту",
  countdownTime = 1800000,
  withBtn = true,
  withHint = false,
  withPhone = false,
  withShadow = false,
  withNav = false,
  Logo = HalvaIcon,
  SecondLogo,
  PhoneProps,
  SidebarProps,
  orderNum,
  links,
  logoColor = "dark",
}: HeaderProps) => {
  const [isActive, setIsActive] = useState(false);

  const onToggleSidebar = useCallback(() => {
    setIsActive((prevState) => !prevState);
  }, []);

  const mods = {
    hideNav: { [styles.hideOnMob]: true, [styles.hideOnTab]: true },
    hidePhone: { [styles.hideOnMob]: true, [styles.hideOnTab]: true },
    hideBtn: { [styles.hideOnMob]: withHint },
    shadow: { [styles.shadow]: withShadow },
  };

  return (
    <header className={clsx(mods.shadow)}>
      <MainContainer>
        <div className={styles.wrapper}>
          <div className={styles.leftSection}>
            <div className={styles.logos}>
              <HalvaLogo Img={Logo} variant={logoColor} />
              {SecondLogo}
            </div>
            {withNav && <Nav links={links} className={clsx(mods.hideNav)} />}
          </div>
          <div className={styles.rightSection}>
            {withNav ? (
              <div className={styles.btnGroup}>
                <Button variant="contained" className={clsx(styles.btn, mods.hideNav)}>
                  {btnText}
                </Button>
                <BurgerIcon
                  className={styles.burger}
                  onClick={onToggleSidebar}
                  data-exclude={orderNum}
                />
              </div>
            ) : (
              <>
                {withHint && (
                  <HintAndCountdown
                    hintTitle={hintTitle}
                    hintText={hintText}
                    onTooltipClose={() => {}}
                    onTooltipOpen={() => {}}
                    countdownTime={countdownTime}
                  />
                )}
                {withPhone && <Phone className={clsx(mods.hidePhone)} {...PhoneProps} />}
                {withBtn && (
                  <Button variant="contained" className={clsx(styles.btn, mods.hideBtn)}>
                    {btnText}
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
        {withNav && (
          <Portal>
            <Sidebar
              Logo={Logo}
              isActive={isActive}
              buttonText={btnText}
              onCloseSidebar={onToggleSidebar}
              links={links}
              orderNum={orderNum}
              {...SidebarProps}
            />
          </Portal>
        )}
      </MainContainer>
    </header>
  );
};

export default Header;
