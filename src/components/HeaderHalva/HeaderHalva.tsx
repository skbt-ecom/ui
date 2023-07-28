import { makeStyles } from "tss-react/mui";

import type { FC, HTMLProps, PropsWithChildren } from "react";

import { HalvaIcon } from "../Icons";
import { Button } from "../base";

import styles from "./HeaderHalva.module.scss";
import { Timer } from "./Timer";

type Props = {
  btnText: string;
  hintTitle: string;
  hintText: string;
  countDownTime?: number;
  Logo?: FC<Partial<HTMLProps<SVGElement>>>;
  AdditionalLogo?: FC<Partial<HTMLProps<SVGElement>>>;
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
  btn: {},
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
}: PropsWithChildren<Props>) => {
  const { classes } = useStyles();

  return (
    <header className={styles.header}>
      <div className={styles.logos}>
        <Logo className={classes.icon} height={50} />
        {AdditionalLogo && <AdditionalLogo />}
      </div>
      {children}
      {hasRightSection && (
        <div className={styles.rightSection}>
          {hasPhone && <div className={styles.phone} />}
          {hasHint && <div className={styles.halvaDesyatka} />}
          {hasTimer && <Timer countDownTime={countDownTime} />}
          {hasBtn && <Button className={classes.btn}>{btnText}</Button>}
        </div>
      )}
    </header>
  );
};

export default Header;
