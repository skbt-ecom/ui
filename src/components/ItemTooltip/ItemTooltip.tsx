import type { FC, HTMLProps, ReactNode } from "react";

import { Zoom, Tooltip, styled, ClickAwayListener } from "@mui/material";

import Hint from "./Hint/Hint";
import { HintIcon } from "../Icons";

import styles from "./ItemTooltip.module.scss";

interface Props {
  hintText: ReactNode;
  Icon?: FC<Partial<HTMLProps<SVGElement>>>;
  leftPosition?: string;
  className?: {
    container?: string;
    icon?: string;
  };
  children?: ReactNode;
  open: boolean;
  handleTooltipOpen: () => void;
  handleTooltipClose: () => void;
}

export const ItemTooltip = ({
  Icon = HintIcon,
  hintText,
  leftPosition,
  className,
  children,
  open,
  handleTooltipOpen,
  handleTooltipClose,
}: Props) => {
  // const HtmlTooltip = withStyles((theme: Theme) => ({
  //   tooltip: {
  //     color: "#000",
  //     position: "absolute",
  //     left: leftPosition,
  //     pointerEvents: "auto",
  //     cursor: "default",
  //     padding: "12px 16px",
  //     background: "#EDF6FE",
  //     boxSizing: "border-box",
  //     boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.12)",
  //     borderRadius: 12,
  //     width: 280,
  //     transition: "0.5s all",
  //     marginTop: 16,

  //     [theme.breakpoints.up("sm")]: {
  //       width: 240,
  //     },

  //     [theme.breakpoints.up("md")]: {
  //       width: 309,
  //     },
  //   },
  // }))(Tooltip);
  const HtmlTooltip = styled(Tooltip)(({ theme }) => ({
    tooltip: {
      color: "tomato",
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
  }));

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <HtmlTooltip
        PopperProps={{ disablePortal: false }}
        onClose={handleTooltipOpen}
        placement="bottom-start"
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={<Hint hintText={hintText} onCloseTooltip={handleTooltipClose} />}
        TransitionComponent={Zoom}
      >
        <div className={styles.childrenContainer} onClick={handleTooltipOpen} aria-hidden="true">
          <span className={className?.container}>
            {children}&nbsp;
            <Icon alt="close" className={className?.icon} />
          </span>
        </div>
      </HtmlTooltip>
    </ClickAwayListener>
  );
};
