import { useCallback, useState } from "react";
import { Zoom, Tooltip, ClickAwayListener } from "@mui/material";
import type { FC, HTMLProps, ReactNode } from "react";

import { ExclamCircle } from "@src/components/Icons";

import Hint from "./Hint/Hint";

import styles from "./ItemTooltip.module.scss";

interface Props {
  hintText?: ReactNode;
  Icon?: FC<Partial<HTMLProps<SVGElement>>>;
  children?: ReactNode;
  onTooltipOpen?: () => void;
  onTooltipClose?: () => void;
  showHint?: boolean;
}

const ItemTooltip = ({
  Icon = ExclamCircle,
  hintText,
  children,
  onTooltipOpen,
  onTooltipClose,
  showHint = true,
}: Props) => {
  const [open, setOpen] = useState(false);

  const onOpenTooltip = useCallback(() => {
    if (showHint) setOpen(true);

    onTooltipOpen?.();
  }, [showHint, onTooltipOpen]);

  const onCloseTooltip = () => {
    setOpen(false);

    onTooltipClose?.();
  };

  return (
    <ClickAwayListener onClickAway={onCloseTooltip}>
      <Tooltip
        PopperProps={{
          disablePortal: false,
          sx: {
            "& .MuiTooltip-tooltip": {
              color: "#000",
              position: "absolute",
              pointerEvents: "auto",
              cursor: "default",
              padding: "12px 16px",
              backgroundColor: "#EDF6FE",
              boxSizing: "border-box",
              boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.12)",
              borderRadius: "12px",
              transition: "0.5s all",
              marginTop: "16px",
              width: "300px",
              left: "-100px",
              lineHeight: "125%",
            },
          },
        }}
        onClose={onTooltipOpen}
        placement="bottom-start"
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={<Hint hintText={hintText} onCloseTooltip={onCloseTooltip} />}
        TransitionComponent={Zoom}
      >
        <span className={styles.childrenContainer} onClick={onOpenTooltip} aria-hidden="true">
          {children}&nbsp;
          <Icon width={14} height={14} alt="exlamation mark" className={styles.icon} />
        </span>
      </Tooltip>
    </ClickAwayListener>
  );
};

export default ItemTooltip;
