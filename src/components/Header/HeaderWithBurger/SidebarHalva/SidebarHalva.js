import React, { useCallback, useEffect } from "react";
import clsx from "clsx";

import Button from "@material-ui/core/Button";

import { CrossIcon } from "../Icons";
import { NavLinks } from "./NavLinks";
import Container from "../../../Container";

import useStyles from "./styles";

const globalThis = require("globalthis/polyfill")();

const SidebarHalva = ({
  isActive,
  Logo,
  onClickBtn,
  onLogoClick,
  onCloseSidebar,
  buttonText = "Оформить карту",
  ...props
}) => {
  const styles = useStyles(props);

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
    onCloseSidebar();

    if (onClickBtn) {
      onClickBtn();
    }
  }, [onCloseSidebar, onClickBtn]);

  return (
    <div className={clsx(styles.container, styles.animated, mods.sidebar)}>
      <Container className={styles.header}>
        <Logo onClick={onLogoClick} />
        <CrossIcon className={styles.cross} onClick={onCloseSidebar} />
      </Container>
      <NavLinks />
      <Button className={styles.btn} onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
};

export default SidebarHalva;
