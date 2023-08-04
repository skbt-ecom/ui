import { makeStyles } from "tss-react/mui";

import type { FC, HTMLProps, PropsWithChildren } from "react";

import { HalvaIcon } from "../Icons";
import { Button } from "../base";
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
};

const useStyles = makeStyles()((theme) => ({
  icon: {
    fill: theme.palette.primary.main,

    width: 72,
    height: 14,

    [theme.breakpoints.up("sm")]: {
      width: 78,
    },

    [theme.breakpoints.up("md")]: {
      width: 108,
      height: 20,
    },
  },
}));

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
  Logo = HalvaIcon,
  AdditionalLogo,
  PhoneProps,
}: PropsWithChildren<Props>) => {
  const { classes } = useStyles();

  return (
    <header className={styles.header}>
      <div className={styles.logos}>
        <Logo className={classes.icon} />
        {AdditionalLogo && <AdditionalLogo />}
      </div>
      {children}
      {hasRightSection && (
        <div className={styles.rightSection}>
          {hasPhone && <Phone {...PhoneProps} />}
          {hasHint && <div className={styles.halvaDesyatka} />}
          {hasTimer && <Timer countDownTime={countDownTime} />}
          {hasBtn && <Button>{btnText}</Button>}
        </div>
      )}
    </header>
  );
};

export default Header;
