import clsx from "clsx";
import { styled } from "@mui/material";

import type { FC, HTMLProps } from "react";
import { useCallback, useState } from "react";

import { BurgerIcon, HalvaIcon } from "../Icons";
import { Button, MainContainer } from "../base";
import { Timer } from "./Timer";
import { Phone } from "../Phone";
import Nav from "./Nav/Nav";
import Sidebar from "./Sidebar/Sidebar";

import type { PhoneProps } from "../Phone";
import type { SidebarProps } from "./Sidebar/Sidebar";
import type { Link } from "./types";

import styles from "./HeaderHalva.module.scss";

type HeaderHalvaProps = {
  btnText: string;
  countDownTime?: number;
  Logo?: FC<Partial<HTMLProps<SVGElement>>>;
  AdditionalLogo?: FC<Partial<HTMLProps<SVGElement>>>;
  PhoneProps?: PhoneProps;
  SidebarProps?: Pick<SidebarProps, "onClickBtn" | "onLogoClick">;
  links?: Link[];
  orderNum?: string;
  hasRightSection?: boolean;
  hasBtn?: boolean;
  hasTimer?: boolean;
  hasHint?: boolean;
  hasPhone?: boolean;
  hasShadow?: boolean;
  hasNav?: boolean;
};

const HeaderHalva = ({
  btnText = "Оформить карту",
  countDownTime,
  hasRightSection = true,
  hasBtn = true,
  hasHint = false,
  hasTimer = false,
  hasPhone = false,
  hasShadow = false,
  hasNav = false,
  Logo = HalvaIcon,
  AdditionalLogo,
  PhoneProps,
  SidebarProps,
  orderNum,
  links,
}: HeaderHalvaProps) => {
  const HalvaLogo = styled(Logo)(({ theme }) => ({
    fill: [theme.palette.primary.main],
    width: 72,
    height: 14,

    [theme.breakpoints.up("sm")]: {
      width: 78,
    },

    [theme.breakpoints.up("md")]: {
      width: 108,
      height: 20,
    },
  }));

  const [isActive, setIsActive] = useState(false);

  const onToggleSidebar = useCallback(() => {
    setIsActive((prevState) => !prevState);
  }, []);

  return (
    <header className={clsx({ [styles.shadow]: hasShadow })}>
      <MainContainer>
        <div className={styles.wrapper}>
          <div className={styles.leftSection}>
            <HalvaLogo />
            {AdditionalLogo && <AdditionalLogo className={styles.additionalLogo} />}
            {hasNav && <Nav links={links} />}
          </div>
          {hasRightSection && (
            <div className={styles.rightSection}>
              {hasNav ? (
                <div className={styles.btnGroup}>
                  <Button className={styles.btn}>{btnText}</Button>
                  <BurgerIcon
                    className={styles.burger}
                    onClick={onToggleSidebar}
                    data-exclude={orderNum}
                    width={18}
                    height={14}
                  />
                </div>
              ) : (
                <>
                  {hasPhone && <Phone {...PhoneProps} />}
                  {hasHint && <div className={styles.halvaDesyatka} />}
                  {hasTimer && <Timer countDownTime={countDownTime} />}
                  {hasBtn && <Button>{btnText}</Button>}
                </>
              )}
            </div>
          )}
        </div>
        {hasNav && (
          <Sidebar
            Logo={Logo}
            isActive={isActive}
            buttonText={btnText}
            onCloseSidebar={onToggleSidebar}
            orderNum={orderNum}
            {...SidebarProps}
          />
        )}
      </MainContainer>
    </header>
  );
};

export default HeaderHalva;
