import type { FC, HTMLProps, PropsWithChildren } from "react";

import clsx from "clsx";

import { styled } from "@mui/material";
import { HalvaIcon } from "../Icons";
import { Button, MainContainer } from "../base";
import { Timer } from "./Timer";
import { Phone } from "../Phone";

import type { PhoneProps } from "../Phone";

import styles from "./HeaderHalva.module.scss";

type Props = {
  btnText: string;
  hintTitle: string;
  hintText: string;
  countDownTime?: number;
  Logo?: FC<Partial<HTMLProps<SVGElement>>>;
  AdditionalLogo?: FC<Partial<HTMLProps<SVGElement>>>;
  PhoneProps?: PhoneProps;
  hasRightSection: boolean;
  hasBtn?: boolean;
  hasTimer?: boolean;
  hasHint?: boolean;
  hasPhone?: boolean;
  hasShadow?: boolean;
};

const Header = ({
  children,
  btnText,
  hintTitle = "Халва.Десятка в подарок",
  hintText = "Оформите карту «Халва» сейчас и получите подписку «Халва.Десятка» в подарок. Раскройте все возможности Халвы по максимуму!",
  countDownTime,
  hasRightSection = true,
  hasBtn = true,
  hasHint = false,
  hasTimer = false,
  hasPhone = false,
  hasShadow = false,
  Logo = HalvaIcon,
  AdditionalLogo,
  PhoneProps,
}: PropsWithChildren<Props>) => {
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

  const phoneClasses = { phoneContainer: styles.phoneContainer };

  return (
    <header className={clsx({ [styles.shadow]: hasShadow })}>
      <MainContainer>
        <div className={styles.container}>
          <div className={styles.logos}>
            <HalvaLogo />
            {AdditionalLogo && <AdditionalLogo />}
          </div>
          {children}
          {hasRightSection && (
            <div className={styles.rightSection}>
              {hasPhone && <Phone {...PhoneProps} classes={phoneClasses} />}
              {hasHint && <div className={styles.halvaDesyatka} />}
              {hasTimer && <Timer countDownTime={countDownTime} />}
              {hasBtn && <Button>{btnText}</Button>}
            </div>
          )}
        </div>
      </MainContainer>
    </header>
  );
};

export default Header;
