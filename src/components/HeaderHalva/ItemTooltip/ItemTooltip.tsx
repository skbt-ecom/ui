import type { ReactNode } from "react";
import React from "react";

import { withStyles } from "@material-ui/styles";
import type { Theme } from "@material-ui/core";
import { Zoom } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import pushToDataLayer from "@ecom/ui/utils/pushToDataLayer";
import { pushToDataLayerOnce } from "../../helpers/pushToDataLayerOnce";

import close_icon from "../../images/icons/icon_closeV2.svg";
import hint_icon from "../../images/icons/icon_hintV2.svg";

import scrollToPersonalForm from "../../helpers/scrollToPersonalForm";

import * as styles from "./itemTooltip.module.scss";

interface Props {
  hint: ReactNode;
  icon?: string;
  leftPosition?: string;
  className?: {
    container?: string;
    icon?: string;
  };
  children?: ReactNode;
  showHint?: boolean;
  hasCTA?: boolean;
  clickInformerDataLayer?: boolean;
}

const handleClick = () => {
  pushToDataLayer({
    event: "buttonClick",
    name: "Халва.Десятка в подарок",
    placement: "top_button_halva",
  });
  scrollToPersonalForm();
};

export const ItemTooltip = ({
  hint,
  icon = hint_icon,
  leftPosition,
  className,
  children,
  showHint = true,
  hasCTA,
  clickInformerDataLayer = false,
}: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    if (showHint) setOpen(true);
    if (hasCTA) handleClick();
    if (clickInformerDataLayer) {
      pushToDataLayerOnce("click_informer", { event: "buttonClick", name: "click_informer" });
    }
  };

  const HtmlTooltip = withStyles((theme: Theme) => ({
    tooltip: {
      color: "#000",
      position: "absolute",
      left: leftPosition,
      pointerEvents: "auto",
      cursor: "default",
      padding: "12px 16px",
      background: "#EDF6FE",
      boxSizing: "border-box",
      boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.12)",
      borderRadius: 12,
      width: 280,
      transition: "0.5s all",
      marginTop: 16,

      [theme.breakpoints.up("sm")]: {
        width: 240,
      },

      [theme.breakpoints.up("md")]: {
        width: 309,
      },
    },
  }))(Tooltip);
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <HtmlTooltip
          PopperProps={{
            disablePortal: false,
          }}
          onClose={handleTooltipOpen}
          placement="bottom-start"
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={
            <div className={styles.hintContainer}>
              <div className={styles.hintIcon} aria-hidden="true">
                <img src={icon} alt="close" />
              </div>
              <div className={styles.hintModal}>{hint}</div>
              <div className={styles.close} onClick={handleTooltipClose} aria-hidden="true">
                <img src={close_icon} alt="close" />
              </div>
            </div>
          }
          TransitionComponent={Zoom}
        >
          <div className={styles.childrenContainer} onClick={handleTooltipOpen} aria-hidden="true">
            <span className={className?.container}>
              {children}&nbsp;
              <img src={icon} alt="close" className={className?.icon} />
            </span>
          </div>
        </HtmlTooltip>
      </div>
    </ClickAwayListener>
  );
};
